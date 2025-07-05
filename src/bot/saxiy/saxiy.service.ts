import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bot } from '../models/bot.model';
import { InjectBot } from 'nestjs-telegraf';

import { Context, Markup, Telegraf } from 'telegraf';
import { BOT_NAME } from '../../app.constants';
import { Saxiy } from './model/saxiy.model';

@Injectable()
export class SaxiyService {
  constructor(
    @InjectModel(Bot)
    private readonly botModel: typeof Bot,
    @InjectModel(Saxiy)
    private readonly SaxiyModel: typeof Saxiy,
    @InjectBot(BOT_NAME)
    private readonly bot: Telegraf<Context>,
  ) {}

  async getUser(user_id: number | undefined) {
    return this.SaxiyModel.findOne({ where: { user_id } });
  }

  async setState(user_id: number | undefined, state: string) {
    const user = await this.getUser(user_id);
    if (user) {
      user.last_state = state;
      await user.save();
    }
  }

  async Saxiymenu(ctx: Context) {
    try {
      await ctx.replyWithHTML('Kerekli menyuni tanlang', {
        ...Markup.keyboard([['new', 'Barcha malumotlar']]).resize(),
      });
    } catch (error) {
      console.log(`Eror on library:::::`, error);
    }
  }

  async Saxiynew(ctx: Context) {
  try {
    const user_id = ctx.from?.id;
    const existing = await this.SaxiyModel.findOne();

    if (!existing) {
      await this.SaxiyModel.create({
        user_id: user_id!,
        last_state: 'name',
      });
    } else {
      existing.last_state = 'name';
      await existing.save();
    }

    await ctx.replyWithHTML(
      `Iltimos Tolliq ism familiyangizni kiriting
 misol: Eshmotov Toshmat`,
      {
        ...Markup.removeKeyboard()
      },
    );


  } catch (error) {
    console.log('Error in Saxiynew:', error);
  }
}

async handleTextStep(ctx: Context) {
  try {
    if (!ctx.message || !('text' in ctx.message)) return;

    const msg = ctx.message.text;
    const user_id = ctx.from?.id;
    const user = await this.SaxiyModel.findOne({ where: { user_id } });

    if (!user || !user.last_state) return;

    switch (user.last_state) {
      case 'name':
        user.name = msg;
        user.last_state = 'address';
        await ctx.reply(`📍 Manzilingizni kiriting
  misol: Toshkent shaxat, yashnaobot tumani `);
        break;

      case 'address':
        user.address = msg;
        user.last_state = 'product';
        await ctx.reply(`bermoqchi bolgan narsalarni kiriting 
misol: bir juft paypoq, ikkita mayka`);
        break;

      case 'product':
        user.product = msg;
        user.last_state = 'location';
        await ctx.reply(`📌 agar bu maxsulotlatni kimgadur yetkazib bermoqchi bolsangiz osha opdam yaxshash manzilini aniq qilib kiriting 
Agar unday bolmasa shunchaki  0  ni kiriting :`);
        break;

      case 'location':
        user.location = msg;
        user.last_state = 'phone_number';
        await ctx.reply(`📞 Telefon raqamingizni kiriting:
misol: +998935032823`);
        break;

      case 'phone_number':
        user.phone_number = msg;
        user.last_state = '';
        await ctx.reply('✅ Malumotlaringiz muvaffaqiyatli saqlandi!');
        break;

      default:
        await ctx.reply("❗ Noma'lum holat. Iltimos /start bosing.");
    }

    await user.save();
  } catch (error) {
    console.log('Error in handleTextStep:', error);
  }
}

}
