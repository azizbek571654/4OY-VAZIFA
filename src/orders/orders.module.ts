import { forwardRef, Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './model/order.model';
import { UsersModule } from '../users/users.module';
import { BasketModule } from '../basket/basket.module';
import { ResturantTablesModule } from '../resturant_tables/resturant_tables.module';
import { User } from '../users/model/user.model';
import { Basket } from '../basket/model/basket.model';
import { ResturantTable } from '../resturant_tables/model/resturant_table.model';
import { Payment } from '../payment/model/payment.model';
import { PaymentModule } from '../payment/payment.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Order, User, Basket, ResturantTable, Payment]),
    forwardRef(() => PaymentModule),
    UsersModule,
    BasketModule,
    ResturantTablesModule,
    JwtModule
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
