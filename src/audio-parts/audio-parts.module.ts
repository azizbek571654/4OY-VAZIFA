import { Module } from '@nestjs/common';
import { AudioPartsService } from './audio-parts.service';
import { AudioPartsController } from './audio-parts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AudioPart } from './model/audio-part.model';
import { JwtAuthGuard } from '../common/guard/user.guard';

@Module({
  imports: [SequelizeModule.forFeature([AudioPart]), JwtAuthGuard],
  controllers: [AudioPartsController],
  providers: [AudioPartsService],
  exports: [AudioPartsService],
})
export class AudioPartsModule {}
