import { Module } from '@nestjs/common';
import { AudioBookService } from './audio-book.service';
import { AudioBookController } from './audio-book.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AudioBook } from './model/audio-book.model';
import { JwtAuthGuard } from '../common/guard/user.guard';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([AudioBook]), JwtModule],
  controllers: [AudioBookController],
  providers: [AudioBookService, IsCreatorGuard],
  exports: [AudioBookService],
})
export class AudioBookModule {}
