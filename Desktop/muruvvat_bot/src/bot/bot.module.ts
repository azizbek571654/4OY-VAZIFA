import { Module } from '@nestjs/common';
import { BotService } from './bot.service';

import { TelegrafModule } from 'nestjs-telegraf';
import { SequelizeModule } from '@nestjs/sequelize';
import { BotUpdate } from './bot.uptade';
import { Bot } from './models/bot.model';

@Module({
  imports: [SequelizeModule.forFeature([Bot])],
  providers: [BotService, BotUpdate],
  controllers: []
})
export class BotModule {}
