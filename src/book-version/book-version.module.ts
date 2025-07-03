import { Module } from '@nestjs/common';
import { BookVersionService } from './book-version.service';
import { BookVersionController } from './book-version.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookVersion } from './model/book-version.model';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([BookVersion]), JwtModule],
  controllers: [BookVersionController],
  providers: [BookVersionService, IsCreatorGuard],
  exports: [BookVersionService],
})
export class BookVersionModule {}
