import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bot } from '../models/bot.model';
import { InjectBot } from 'nestjs-telegraf';

import { Context, Markup, Telegraf } from 'telegraf';
import { BOT_NAME } from '../../app.constants';
import { Sabirli } from './model/sabirli.model';

@Injectable()
export class SabirliService {
  constructor(
    @InjectModel(Bot)
    private readonly botModel: typeof Bot,
    @InjectModel(Sabirli)
    private readonly sabirliModel: typeof Sabirli,
    @InjectBot(BOT_NAME)
    private readonly bot: Telegraf<Context>,
  ) {}

  async getUser(user_id: number | undefined) {
    return this.sabirliModel.findOne({ where: { user_id } });
  }

  async setState(user_id: number | undefined, state: string) {
    const user = await this.getUser(user_id);
    if (user) {
      user.last_state = state;
      await user.save();
    }
  }

  async sabirlimenu(ctx: Context) {
    try {
        // console.log('✅ Sabirli tugmasi bosildi');
      await ctx.replyWithHTML('Kerekli menyuni tanlang', {
        ...Markup.keyboard([
          ['Murojat Yollash'],
          ["admin bilan bog'lanish", 'Sozlanmalar'],
          ['Asosiy menu'],
        ]).resize(),
      });
    } catch (error) {
      console.log(`Eror on Sabirli menu  ()====||:::::::::::>> `, error);
    }
  }

  async mainmenu(ctx: Context) {
    try {
      await ctx.replyWithHTML('🏠 Siz asosiy menyuga qaytdingiz!', {
        ...Markup.keyboard([['Saxiy', 'Sabirli']]).resize(),
      });
      await this.setState(ctx.from?.id, '');
    } catch (error) {
      console.log('Error in goToMainMenu:', error);
    }
  }

  async newRequest(ctx: Context) {
    const user_id = ctx.from?.id;
    await this.sabirliModel.create({
      user_id: user_id!,
      last_state: 'name',
    });

    await ctx.reply('📝 Iltimos, to‘liq ismingizni kiriting:');
  }

  async handleSabirliSteps(ctx: Context) {
    if (!ctx.message || !('text' in ctx.message)) return;

    const msg = ctx.message.text;
    const user_id = ctx.from?.id;

    const user = await this.sabirliModel.findOne({
      where: { user_id },
      order: [['createdAt', 'DESC']],
    });

    if (!user || !user.last_state) return;

    switch (user.last_state) {
      case 'name':
        user.name = msg;
        user.last_state = 'age';
        await ctx.reply('📆 Yoshingizni kiriting (masalan: 35)');
        break;

      case 'age':
        user.age = parseInt(msg);
        user.last_state = 'gender';
        await ctx.reply('👤 Jinsingizni kiriting (Erkak / Ayol)');
        break;

      case 'gender':
        user.gender = msg;
        user.last_state = 'address';
        await ctx.reply('🏠 Yashash manzilingizni kiriting:');
        break;

      case 'address':
        user.address = msg;
        user.last_state = 'product';
        await ctx.reply(
          '🎁 Sizga nima kerakligini yozing (masalan: dori, oziq-ovqat)',
        );
        break;

      case 'product':
        user.product = msg;
        user.last_state = 'destcription';
        await ctx.reply(
          "📄 Qo‘shimcha tavsif kiriting yoki 'yo‘q' deb yozing:",
        );
        break;

      case 'destcription':
        user.destcription = msg;
        user.last_state = 'location';
        await ctx.reply(
          '📍 Aniq manzilingizni yoki yetkazib berish nuqtasini yozing:',
        );
        break;

      case 'location':
        user.location = msg;
        user.last_state = 'phone_number';
        await ctx.reply(
          '📞 Telefon raqamingizni kiriting (masalan: +998901234567):',
        );
        break;

      case 'phone_number':
        user.phone_number = msg;
        user.last_state = '';
        await ctx.reply(
          '✅ Murojaatingiz qabul qilindi! Tez orada siz bilan bog‘lanamiz.',
        );
        break;

      default:
        await ctx.reply('❗ Xatolik yuz berdi. Iltimos, /start bosing.');
    }

    await user.save();
  }
}
