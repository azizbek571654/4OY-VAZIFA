import { Module } from '@nestjs/common';
import { ResturantTableService } from './resturant_tables.service';
import { ResturantTablesController } from './resturant_tables.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ResturantTable } from './model/resturant_table.model';
import { RestarantModule } from '../restarant/restarant.module';
import { Restarant } from '../restarant/model/restarant.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([ResturantTable, Restarant]),
    RestarantModule,
    JwtModule
  ],
  controllers: [ResturantTablesController],
  providers: [ResturantTableService],
  exports: [ResturantTableService],
})
export class ResturantTablesModule {}
