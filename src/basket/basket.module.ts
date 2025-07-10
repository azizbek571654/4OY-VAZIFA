import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './model/basket.model';
import { UsersModule } from '../users/users.module';
import { MenusModule } from '../menus/menus.module';
import { User } from '../users/model/user.model';
import { Menu } from '../menus/model/menu.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Basket, User, Menu]),
    UsersModule,
    MenusModule,
    JwtModule
  ],
  controllers: [BasketController],
  providers: [BasketService],
  exports: [BasketService],
})
export class BasketModule {}
