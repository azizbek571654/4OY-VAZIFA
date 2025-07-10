import { Module } from '@nestjs/common';
import { MenuService } from './menus.service';
import { MenusController } from './menus.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Menu } from './model/menu.model';
import { CategoryModule } from '../category/category.module';
import { RestarantModule } from '../restarant/restarant.module';
import { Category } from '../category/model/category.model';
import { Restarant } from '../restarant/model/restarant.model';
import { FilesModule } from '../files/files.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Menu, Category, Restarant]),
    CategoryModule,
    RestarantModule,
    FilesModule,
    JwtModule
  ],
  controllers: [MenusController],
  providers: [MenuService],
  exports: [MenuService],
})
export class MenusModule {}
