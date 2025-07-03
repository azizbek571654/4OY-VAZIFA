import { Module } from '@nestjs/common';
import { BookCollectionService } from './book-collection.service';
import { BookCollectionController } from './book-collection.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookCollection } from './model/book-collection.model';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([BookCollection]), JwtModule],
  controllers: [BookCollectionController],
  providers: [BookCollectionService, IsCreatorGuard],
  exports: [BookCollectionService],
})
export class BookCollectionModule {}
