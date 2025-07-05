import { Context, Markup } from 'telegraf';
import { BotService } from '../bot.service';
import {
  Action,
  Command,
  Ctx,
  Hears,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { SaxiyService } from './saxiy.service';

@Update()
export class SaxiyUptade {
  constructor(private readonly saxiyService: SaxiyService) {}

  @Hears('Saxiy')
  async handleText(@Ctx() ctx: Context) {
    await this.saxiyService.Saxiymenu(ctx);
  }
  @Hears('new')
  async handlenew(@Ctx() ctx: Context) {
    await this.saxiyService.Saxiynew(ctx);
  }

  @On('text')
  async onText(@Ctx() ctx: Context) {
    await this.saxiyService.handleTextStep(ctx);
  }
}
