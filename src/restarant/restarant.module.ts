import { Module } from '@nestjs/common';
import { RestarantService } from './restarant.service';
import { RestarantController } from './restarant.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Restarant } from './model/restarant.model';
import { UsersModule } from '../users/users.module';
import { CategoryModule } from '../category/category.module';
import { User } from '../users/model/user.model';
import { Category } from '../category/model/category.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Restarant, User, Category]),
    UsersModule,
    CategoryModule,
    JwtModule
  ],
  controllers: [RestarantController],
  providers: [RestarantService],
  exports: [RestarantService],
})
export class RestarantModule {}
