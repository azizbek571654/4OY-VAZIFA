import { Ctx, Hears, On, Start, Update, Action } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { BotService } from './bot.service';

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}

  @Start()
  async onStart(@Ctx() ctx: Context) {
    await this.botService.start(ctx);
  }

  @Action(/register_.+/)
  async onRoleSelected(@Ctx() ctx: Context) {
    await this.botService.handleRoleSelection(ctx);
  }

  @On('contact')
  async onContact(@Ctx() ctx: Context) {
    await this.botService.onContact(ctx);
  }

  @On('location')
  async onLocation(@Ctx() ctx: Context) {
    await this.botService.onLocation(ctx);
  }

  @Hears(/^[A-ZА-Яa-zа-я0-9 ,.'-]+$/i)
  async onRegionText(@Ctx() ctx: Context) {
    await this.botService.handleRegionInput(ctx);
  }

  @Hears('📋 Sabrlilarni ko’rish')
  async onShowSabrliMenu(@Ctx() ctx: Context) {
    await this.botService.showSabrliFilterMenu(ctx);
  }

  @Action(/donate_.+/)
  async onDonate(@Ctx() ctx: Context) {
    await this.botService.handleDonation(ctx);
  }
}
