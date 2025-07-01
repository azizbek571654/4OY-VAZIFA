import { Body, Controller, HttpCode, Param, ParseIntPipe, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.Admin.service";
// import { CreateAdminDto } from "../users/dto/create-user.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { SigninAdminDto } from "../users/dto/signin-user.dto";
import { Response } from "express";
import { CookieGetter } from "../common/decorators/cookie-getter.decorrator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signupa")
  signup(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.signup(createAdminDto);
  }

  @HttpCode(200)
  @Post("signina")
  signin(
    @Body() signinadminDto: SigninAdminDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signin(signinadminDto, res);
  }

  @HttpCode(200)
  @Post("signouta")
  signout(
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOut(refreshToken, res);
  }

  @HttpCode(200)
  @Post(":id/refresha")
  refresh(
    @Param("id", ParseIntPipe) id: number,
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.refreshToken(id, refreshToken, res);
  }
}
