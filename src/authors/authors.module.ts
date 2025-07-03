import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from './model/author.model';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Module({
  imports: [SequelizeModule.forFeature([Author]), AuthModule, JwtModule],
  controllers: [AuthorsController],
  providers: [AuthorsService, IsCreatorGuard],
  exports: [AuthorsService],
})
export class AuthorsModule {}
