import { Module } from '@nestjs/common';
import { ProductReweiwsService } from './product-reweiws.service';
import { ProductReweiwsController } from './product-reweiws.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductReweiw } from './model/product-reweiw.model';
import { Admin } from '../admin/model/admin.model';
import { Product } from '../product/model/product.model';
import { ProductOrder } from '../product-orders/model/product-order.model';
import { AdminModule } from '../admin/admin.module';
import { ProductModule } from '../product/product.module';
import { ProductOrdersModule } from '../product-orders/product-orders.module';

@Module({
  imports: [
      SequelizeModule.forFeature([ProductReweiw, Admin, Product, ProductOrder]),
      AdminModule,
      ProductModule,
      ProductOrdersModule,
    ],
  controllers: [ProductReweiwsController],
  providers: [ProductReweiwsService],
})
export class ProductReweiwsModule {}
