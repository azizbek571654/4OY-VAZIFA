import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './model/product.model';
import { AdminModule } from '../admin/admin.module';
import { Admin } from '../admin/model/admin.model';
import { Category } from '../categories/model/category.model';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Product, Admin, Category]),
    AdminModule,
    CategoriesModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
