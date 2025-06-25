import { Module } from '@nestjs/common';
import { ProductOrdersService } from './product-orders.service';
import { ProductOrdersController } from './product-orders.controller';
import { Admin } from '../admin/model/admin.model';
import { Product } from '../product/model/product.model';
import { Kurier } from '../kurier/model/kurier.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductOrder } from './model/product-order.model';
import { AdminModule } from '../admin/admin.module';
import { ProductModule } from '../product/product.module';
import { KurierModule } from '../kurier/kurier.module';

@Module({
  imports: [
    SequelizeModule.forFeature([ProductOrder, Admin, Product, Kurier]),
    AdminModule,
    ProductModule,
    KurierModule,
  ],
  controllers: [ProductOrdersController],
  providers: [ProductOrdersService],
  exports: [ProductOrdersService],
})
export class ProductOrdersModule {}
