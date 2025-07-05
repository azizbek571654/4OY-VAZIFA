import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';

import { Bot } from './models/bot.model';
import { Saxiy } from './saxiy/model/saxiy.model';
import { SaxiyService } from './saxiy/saxiy.service';
import { SaxiyUptade } from './saxiy/saxiy.uploud';

@Module({
  imports: [
    SequelizeModule.forFeature([Bot, Saxiy]),
  ],
  controllers: [],
  providers: [BotUpdate, BotService, SaxiyService, SaxiyUptade],
})
export class BotModule {}
