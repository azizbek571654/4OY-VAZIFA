import { Module } from '@nestjs/common';
import { BookMarksService } from './book-marks.service';
import { BookMarksController } from './book-marks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookMark } from './model/book-mark.model';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([BookMark]),JwtModule],
  controllers: [BookMarksController],
  providers: [BookMarksService, IsCreatorGuard],
  exports: [BookMarksService],
})
export class BookMarksModule {}
