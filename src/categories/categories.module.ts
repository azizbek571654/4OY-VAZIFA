import { Module } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './model/category.model';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([Category]), AuthModule, JwtModule],
  controllers: [CategoriesController],
  providers: [CategoryService, IsCreatorGuard],
  exports: [CategoryService],
})
export class CategoriesModule {}
