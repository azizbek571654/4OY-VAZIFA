import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './model/admin.model';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [
    SequelizeModule.forFeature([Admin]),
    JwtModule.register({
      secret: process.env.ACCESS_TOKEN_KEY,
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService, IsCreatorGuard],
  exports: [AdminService],
})
export class AdminModule {}
