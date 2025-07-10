import { forwardRef, Module } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/model/user.model';
import { InjectModel, SequelizeModule } from '@nestjs/sequelize';
import { CategoryModule } from './category/category.module';
import { Category } from './category/model/category.model';
import { LanguageModule } from './language/language.module';
import { Language } from './language/model/language.model';
import { RestarantModule } from './restarant/restarant.module';
import { Restarant } from './restarant/model/restarant.model';
import { MenusModule } from './menus/menus.module';
import { Menu } from './menus/model/menu.model';
import { BasketModule } from './basket/basket.module';
import { Basket } from './basket/model/basket.model';
import { FoodRaitingModule } from './food-raiting/food-raiting.module';
import { FoodRaiting } from './food-raiting/model/food-raiting.model';
import { ResturantTablesModule } from './resturant_tables/resturant_tables.module';
import { ResturantTable } from './resturant_tables/model/resturant_table.model';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/model/order.model';
import { NotificationModule } from './notification/notification.module';
import { Notification } from './notification/model/notification.model';
import { PaymentModule } from './payment/payment.module';
import { Payment } from './payment/model/payment.model';
import { Gender, Roles } from './common/enum';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        User,
        Category,
        Language,
        Restarant,
        Menu,
        Basket,
        FoodRaiting,
        ResturantTable,
        Order,
        Notification,
        Payment,
      ],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true },
    }),
    UsersModule,
    AuthModule,
    CategoryModule,
    LanguageModule,
    RestarantModule,
    MenusModule,
    BasketModule,
    FoodRaitingModule,
    ResturantTablesModule,
    forwardRef(() => OrdersModule),
    forwardRef(() => PaymentModule),
    NotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
