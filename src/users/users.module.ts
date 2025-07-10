import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { LanguageModule } from '../language/language.module';
import { Language } from '../language/model/language.model';
import { AuthModule } from '../auth/auth.module';
import { SuperAdminGuard } from '../common/guards/supperadmin.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Language]),
    forwardRef(() => AuthModule),
    JwtModule.register({}),
    LanguageModule,
  ],
  controllers: [UsersController],
  providers: [UserService, SuperAdminGuard],
  exports: [UserService],
})
export class UsersModule {}
