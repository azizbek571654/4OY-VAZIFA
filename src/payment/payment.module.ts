import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment } from './model/payment.model';
import { Admin } from '../../dist/admin/model/admin.model';
import { AdminModule } from '../../dist/admin/admin.module';
import { ProductOrder } from '../product-orders/model/product-order.model';
import { ProductOrdersModule } from '../product-orders/product-orders.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Payment, Admin, ProductOrder]),
    AdminModule,
    ProductOrdersModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
