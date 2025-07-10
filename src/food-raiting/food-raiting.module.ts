import { Module } from '@nestjs/common';
import { FoodRaitingService } from './food-raiting.service';
import { FoodRaitingController } from './food-raiting.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FoodRaiting } from './model/food-raiting.model';
import { UsersModule } from '../users/users.module';
import { MenusModule } from '../menus/menus.module';
import { User } from '../users/model/user.model';
import { Menu } from '../menus/model/menu.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([FoodRaiting, User, Menu]),
    UsersModule,
    MenusModule,
    JwtModule
  ],
  controllers: [FoodRaitingController],
  providers: [FoodRaitingService],
  exports: [FoodRaitingService],
})
export class FoodRaitingModule {}
