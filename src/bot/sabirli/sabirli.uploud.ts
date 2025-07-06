import { Context, Markup } from 'telegraf';
import {
  Action,
  Command,
  Ctx,
  Hears,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { SabirliService } from './sabirli.service';

@Update()
export class SabirliUpdate {
  constructor(private readonly sabirliService: SabirliService) {}

  @Hears('Sabirli')
  async handleText(@Ctx() ctx: Context) {
    if (!ctx.message || !('text' in ctx.message)) {
      console.log('❌ Xabar matn emas yoki mavjud emas');
      return;
    }

    console.log('✅ Sabirli tugmasi bosildi:', ctx.message.text);
    await this.sabirliService.sabirlimenu(ctx);
  }

  @Hears('Asosiy menu')
  async mainmenu(@Ctx() ctx: Context) {
    await this.sabirliService.mainmenu(ctx);
  }

  @Hears('Murojat Yollash')
  async startForm(@Ctx() ctx: Context) {
    await this.sabirliService.newRequest(ctx);
  }

  @On('text')
  async handleSteps(@Ctx() ctx: Context) {
    await this.sabirliService.handleSabirliSteps(ctx);
  }

  // @On('text')
  // async testAny(@Ctx() ctx: Context) {
  //   if (ctx.message && 'text' in ctx.message) {
  //     console.log('➡️ Foydalanuvchi yozdi:', ctx.message.text);
  //   }
  // }
  
}