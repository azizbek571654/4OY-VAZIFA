import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAdminDto } from '../admins/dto/create-admin-temp';
import { JwtService } from '@nestjs/jwt';
import { Admin } from '../admins/model/admin.model';
import { SigninUserDto } from '../admins/model/signin-user.Dto';
import { singularize } from 'sequelize/types/utils';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() createUserDto: CreateAdminDto) {
    return this.authService.signup(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() signinUserDto: SigninUserDto) {
    return this.authService.singin(signinUserDto);
  }
}
