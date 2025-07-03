import { Module } from '@nestjs/common';
import { AudioPartsService } from './audio-parts.service';
import { AudioPartsController } from './audio-parts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AudioPart } from './model/audio-part.model';
import { JwtAuthGuard } from '../common/guard/user.guard';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([AudioPart]), JwtModule],
  controllers: [AudioPartsController],
  providers: [AudioPartsService, IsCreatorGuard],
  exports: [AudioPartsService],
})
export class AudioPartsModule {}
