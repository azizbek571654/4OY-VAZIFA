import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './model/language.model';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([Language]), AuthModule, JwtModule],
  controllers: [LanguagesController],
  providers: [LanguagesService, IsCreatorGuard],
  exports: [LanguagesService],
})
export class LanguagesModule {}
