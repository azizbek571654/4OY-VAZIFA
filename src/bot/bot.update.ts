import { BotService } from './bot.service';
import { Ctx, On, Start, Update } from 'nestjs-telegraf';
import { Context } from "telegraf"

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}
  @Start()
  async onStart(@Ctx() ctx: Context) {
    await this.botService.start(ctx);
  }

  @On("contact")
  async oncontact(@Ctx() ctx: Context){
      await this.botService.onContact(ctx)
  }
}
