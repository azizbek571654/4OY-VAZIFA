import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Collection } from './model/collection.model';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([Collection]), JwtModule],
  controllers: [CollectionController],
  providers: [CollectionService, IsCreatorGuard],
  exports: [CollectionService],
})
export class CollectionModule {}
