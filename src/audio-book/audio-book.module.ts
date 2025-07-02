import { Module } from '@nestjs/common';
import { AudioBookService } from './audio-book.service';
import { AudioBookController } from './audio-book.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AudioBook } from './model/audio-book.model';
import { JwtAuthGuard } from '../common/guard/user.guard';

@Module({
  imports: [SequelizeModule.forFeature([AudioBook]), JwtAuthGuard],
  controllers: [AudioBookController],
  providers: [AudioBookService],
  exports: [AudioBookService],
})
export class AudioBookModule {}
