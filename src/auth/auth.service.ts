import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/models/user.model";
import { Admin } from "../admin/model/admin.model";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AdminService } from "../admin/admin.service";
import { UsersService } from "../users/users.service";
import { SigninUserDto } from "../users/dto/signin-user.dto";
import { SigninAdminDto } from "../users/dto/signin-user.dto";
import { Response } from "express";
import * as bcrypt from "bcrypt";
import { MailService } from "../mail/mail.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService,
    private readonly usersService: UsersService,
    private readonly mailService: MailService
  ) {}

  async generateTokens(user: User) {
    const payload = {
      id: user.id,
      is_active: user.is_active,
      is_premium: user.is_premium,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async signup(createUserDto: CreateUserDto) {
    const candidate = await this.usersService.findUserByEmail(
      createUserDto.email
    );
    if (candidate) {
      throw new ConflictException("Bunday foydalanuvchi mavjud");
    }
    const newUser = await this.usersService.create(createUserDto);
    //sendMail
    try {
      await this.mailService.sendMail(newUser);
    } catch (error) {
      console.log(error);
      throw new ServiceUnavailableException("Emailga xat yuborishda xatolik");
    }

    return {
      message:
        "Ro'yxatdan o'tdingiz. Accountni faollashtirish uchun emailni tasdiqlang!",
    };
  }

  async signin(signinUserDto: SigninUserDto, res: Response) {
    const user = await this.usersService.findUserByEmail(signinUserDto.email);

    if (!user) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    const isMatched = await bcrypt.compare(
      signinUserDto.password,
      user.password
    );

    if (!isMatched) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    const { accessToken, refreshToken } = await this.generateTokens(user);
    user.refresh_token = await bcrypt.hash(refreshToken, 7);
    user.save();

    res.cookie("refreshToken", refreshToken, {
      maxAge: +process.env.COOKIE_TIME!,
      httpOnly: true,
    });

    return { message: "Tizimga xush kelibsiz", id: user.id, accessToken };
  }

  async signOut(refrshToken: string, res: Response) {
    try {
      const UserData = await this.jwtService.verify(refrshToken, {
        secret: process.env.REFRESH_TOKEN_KEY,
      });
      if (!UserData) {
        throw new ForbiddenException("User not Verifiying");
      }
      await this.usersService.uptadeRefreshToken(UserData.id, "");

      res.clearCookie("refreshToken");
      return {
        message: "user logged out success",
      };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async refreshToken(
    userId: number,
    refreshTokenfromCookie: string,
    res: Response
  ) {
    const decodeToken = await this.jwtService.decode(refreshTokenfromCookie);

    if (userId !== decodeToken["id"]) {
      throw new ForbiddenException("ruxsat bermaganman");
    }
    const user = await this.usersService.findOne(userId);

    if (!user || !user.refresh_token) {
      throw new NotFoundException("user not found");
    }
    const tokenMatch = await bcrypt.compare(
      refreshTokenfromCookie,
      user.refresh_token
    );

    if (!tokenMatch) {
      throw new ForbiddenException("forbidden");
    }

    const { accessToken, refreshToken } = await this.generateTokens(user);

    const refresh_token = await bcrypt.hash(refreshToken, 7);
    await this.usersService.uptadeRefreshToken(user.id, refresh_token);

    res.cookie("refreshToken", refreshToken, {
      maxAge: Number(process.env.COOKIE_TIME),
      httpOnly: true,
    });

    const response = {
      message: "user resfreshed",
      userId: user.id,
      accessToken: accessToken,
    };
    return response;
  }
}
