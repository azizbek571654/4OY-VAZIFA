import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genre } from './model/genre.model';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([Genre]), AuthModule, JwtModule],
  controllers: [GenreController],
  providers: [GenreService, IsCreatorGuard],
  exports: [GenreService],
})
export class GenreModule {}
