import { forwardRef, Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment } from './model/payment.model';
import { Order } from '../orders/model/order.model';
import { OrdersModule } from '../orders/orders.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { User } from '../users/model/user.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Payment, Order, User]),
    UsersModule,
    forwardRef(() => OrdersModule),
    JwtModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
