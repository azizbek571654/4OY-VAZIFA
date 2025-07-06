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
import { SaxiyService } from './saxiy.service';

@Update()
export class SaxiyUptade {
  constructor(private readonly saxiyService: SaxiyService) {}

  @Hears('Saxiy')
  async handleText(@Ctx() ctx: Context) {
    console.log('✅ saxiy tugmasi bosildi');
    await this.saxiyService.Saxiymenu(ctx);
  }
  @Hears('Muruvat qilish')
  async handlenew(@Ctx() ctx: Context) {
    await this.saxiyService.Saxiynew(ctx);
  }
  @Hears('Asosiy menu')
  async handleMainMenu(@Ctx() ctx: Context) {
    await this.saxiyService.goToMainMenu(ctx);
  }

  @On('text')
  async onText(@Ctx() ctx: Context) {
    await this.saxiyService.handleTextStep(ctx);
  }
}
