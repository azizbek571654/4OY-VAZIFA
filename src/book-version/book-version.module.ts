import { Module } from '@nestjs/common';
import { BookVersionService } from './book-version.service';
import { BookVersionController } from './book-version.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookVersion } from './model/book-version.model';

@Module({
  imports: [SequelizeModule.forFeature([BookVersion])],
  controllers: [BookVersionController],
  providers: [BookVersionService],
  exports: [BookVersionService],
})
export class BookVersionModule {}
