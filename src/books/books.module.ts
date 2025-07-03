import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './model/book.model';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([Book]), JwtModule],
  controllers: [BooksController],
  providers: [BooksService, IsCreatorGuard],
  exports: [BooksService],
})
export class BooksModule {}
