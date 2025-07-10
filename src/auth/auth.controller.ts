import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CookieGetter } from '../common/decorators/cookie-geter.decorator';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SigninUserDto } from '../users/dto/signin-user.dto';
import { Response } from 'express';
import { SuperAdminGuard } from '../common/guards/supperadmin.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }
  @HttpCode(200)
  @Post('signIn')
  signIn(
    @Body() signInUserDto: SigninUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.signIn(signInUserDto, res);
  }

  @HttpCode(200)
  @Get('signOut')
  signOut(
    @CookieGetter('refreshToken') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.signOut(refreshToken, res);
  }

  @HttpCode(200)
  @Post('refresh/:id')
  refresh(
    @Param('id', ParseIntPipe) id: number,
    @CookieGetter('refreshToken') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refreshToken(id, refreshToken, res);
  }
}
