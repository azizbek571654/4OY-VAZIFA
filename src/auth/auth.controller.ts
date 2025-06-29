import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SignUserDto } from '../users/dto/login';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @Post("signin")
  signin(@Body() signinUserDto: SignUserDto) {
    return this.authService.signin(signinUserDto);
  }

  @Post("signout")
  signout(@Body("userId") userId: number) {
    return this.authService.signout(userId);
  }
}
