import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bot } from './models/bot.model';
import { Context, Markup } from 'telegraf';
import { Message } from 'telegraf/typings/core/types/typegram';

@Injectable()
export class BotService {
  constructor(@InjectModel(Bot) private botModel: typeof Bot) {}

  async start(ctx: Context) {
    const roleKeyboard = Markup.inlineKeyboard([
      [Markup.button.callback('🕌 Sahiy', 'register_sahiy')],
      [Markup.button.callback('⏳ Sabrli', 'register_sabrli')],
    ]);
    await ctx.reply(`Ro'yxatdan o'tish uchun birini tanlang:`, roleKeyboard);
  }

  async handleRoleSelection(ctx: Context) {
    const userId = ctx.from?.id;
    const role = (ctx as any).update.callback_query.data.replace('register_', '');

    let user = await this.botModel.findByPk(userId);
    if (!user) {
      user = await this.botModel.create({
        user_id: userId!,
        first_name: ctx.from?.first_name || '',
        last_name: ctx.from?.last_name || '',
        username: ctx.from?.username || '',
        language_code: ctx.from?.language_code || '',
        role,
        status: false,
      });
    } else {
      user.role = role;
      await user.save();
    }

    await ctx.replyWithHTML(
      `Iltimos telefon raqamingizni yuboring`,
      Markup.keyboard([
        [Markup.button.contactRequest('☎️ telefon raqamni yuborrish')],
      ])
        .oneTime()
        .resize()
    );
  }

  async onContact(ctx: Context) {
    const userId = ctx.from?.id;
    const user = await this.botModel.findByPk(userId);
    if (!user) return await ctx.reply('Avval /start ni bosing.');

    const message = ctx.message as Message.ContactMessage;
    if (message.contact.user_id !== userId) {
      return await ctx.replyWithHTML(
        `Faqat o'zingizning raqamingizni yuboring.`,
        Markup.keyboard([
          [Markup.button.contactRequest('☎️ telefon raqamni yuborrish')],
        ])
          .oneTime()
          .resize()
      );
    }

    user.phone_number = message.contact.phone_number.startsWith('+')
      ? message.contact.phone_number
      : '+' + message.contact.phone_number;
    user.status = true;
    await user.save();

    if (user.role === 'sahiy') {
      await ctx.reply(
        '📍 Ixtiyoriy: Lokatsiyangizni yuboring (yoki "⏭ O‘tkazib yuborish"ni bosing)',
        Markup.keyboard([
          [Markup.button.locationRequest('📍 Lokatsiyani yuborish')],
          ['⏭ O‘tkazib yuborish'],
        ])
          .oneTime()
          .resize()
      );
    } else if (user.role === 'sabrli') {
      await ctx.reply('Iltimos viloyatingiz va tumaningizni kiriting (masalan: Andijon, Asaka)');
    }
  }

  async handleRegionInput(ctx: Context) {
    const userId = ctx.from?.id;
    const user = await this.botModel.findByPk(userId);
    if (!user || user.role !== 'sabrli') return;

    if ('text' in ctx.message!) {
      user.location = ctx.message.text;
      await user.save();
    }

    await ctx.reply(`✅ Ro'yxatdan o'tish yakunlandi!`, Markup.removeKeyboard());

    await ctx.reply(`Menyudan foydalaning:`, Markup.keyboard([
      ['📝 Murojaat yo’llash'],
      ['👤 Admin bilan bog’lanish', '⚙️ Sozlamalar'],
      ['🏠 Asosiy menyu'],
    ]).resize());
  }

  async onLocation(ctx: Context) {
    const userId = ctx.from?.id;
    const user = await this.botModel.findByPk(userId);
    if (!user) return;

    const message = ctx.message as Message.LocationMessage;
    if (message.location) {
      user.location = JSON.stringify(message.location);
      await user.save();
    }

    await ctx.replyWithHTML(`✅ Ro'yxatdan o'tish yakunlandi!`, Markup.removeKeyboard());

    await ctx.reply(`Menyudan foydalaning:`, Markup.keyboard([
      ['🤝 Muruvvat qilish', '📋 Sabrlilarni ko’rish'],
      ['👤 Admin bilan bog’lanish', '⚙️ Sozlamalar'],
      ['🏠 Asosiy menyu'],
    ]).resize());
  }

  async showSabrliFilterMenu(ctx: Context) {
    await ctx.reply('Quyidagilardan birini tanlang:', Markup.keyboard([
      ['👥 Barcha sabrlilar', '📍 Hudud bo’yicha'],
      ['🧑‍🦰 Jinsi va yoshi bo’yicha', '🧥 Jinsi va o’lchami bo’yicha'],
      ['🔙 Ortga qaytish'],
    ]).resize());
  }

  async sendSabrliList(ctx: Context, filteredUsers: Bot[]) {
    for (const sabrli of filteredUsers) {
      const caption = `👤 Ismi: ${sabrli.first_name}\n🧑 Jinsi: ...\n🎂 Yoshi: ...\n📏 O’lchami: ...\n📌 Kerak: ...`;

      await ctx.replyWithPhoto({ url: 'https://via.placeholder.com/300' }, {
        caption,
        ...Markup.inlineKeyboard([
          [Markup.button.callback('🤝 Muruvvat qilish', `donate_${sabrli.user_id}`)],
        ]),
      });
    }
  }

  async handleDonation(ctx: Context) {
    const sabrliId = (ctx as any).update.callback_query.data.split('_')[1];
    await ctx.reply('Qanday kiyim-kechak bermoqchisiz? (Iltimos yozib yuboring)');

  }
}
