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
// import { admin } from "../admins/models/admin.model";
import { Admin } from "../admin/model/admin.model";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
// import { CreateadminDto } from "../admins/dto/create-admin.dto";
import { AdminService } from "../admin/admin.service";
// import { adminsService } from "../admins/admins.service";
// import { SigninadminDto } from "../admins/dto/signin-admin.dto";
import { SigninAdminDto } from "../users/dto/signin-user.dto";
import { Response } from "express";
import * as bcrypt from "bcrypt";
import { MailService } from "../mail/mail.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService,
    // private readonly adminsService: adminsService,
    private readonly mailService: MailService
  ) {}

  async generateTokens(admin: Admin) {
    const payload = {
      id: admin.id,
      is_active: admin.is_active,
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

  async signup(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminService.findadminByEmail(
      createAdminDto.email
    );
    if (candidate) {
      throw new ConflictException("Bunday foydalanuvchi mavjud");
    }
    const newAdmin = await this.adminService.create(createAdminDto);
    //sendMail
    try {
      await this.mailService.sendMailA(newAdmin);
      console.log(newAdmin.activation_link);
      
    } catch (error) {
      console.log(error);
      throw new ServiceUnavailableException("Emailga xat yuborishda xatolik");
    }

    return {
      message:
        "Ro'yxatdan o'tdingiz. Accountni faollashtirish uchun emailni tasdiqlang!",
    };
  }

  async signin(signinAdminDto: SigninAdminDto, res: Response) {
    const admin = await this.adminService.findadminByEmail(signinAdminDto.email);

    if (!admin) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    const isMatched = await bcrypt.compare(
      signinAdminDto.password,
      admin.password
    );

    if (!isMatched) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    const { accessToken, refreshToken } = await this.generateTokens(admin);
    admin.refresh_token = await bcrypt.hash(refreshToken, 7);
    admin.save();

    res.cookie("refreshToken", refreshToken, {
      maxAge: +process.env.COOKIE_TIME!,
      httpOnly: true,
    });

    return { message: "Tizimga xush kelibsiz", id: admin.id, accessToken };
  }

  async signOut(refrshToken: string, res: Response) {
    try {
      const adminData = await this.jwtService.verify(refrshToken, {
        secret: process.env.REFRESH_TOKEN_KEY,
      });
      if (!adminData) {
        throw new ForbiddenException("admin not Verifiying");
      }
      await this.adminService.UdateRefreshToken(adminData.id, "");

      res.clearCookie("refreshToken");
      return {
        message: "admin logged out success",
      };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async refreshToken(
    adminId: number,
    refreshTokenfromCookie: string,
    res: Response
  ) {
    const decodeToken = await this.jwtService.decode(refreshTokenfromCookie);

    if (adminId !== decodeToken["id"]) {
      throw new ForbiddenException("ruxsat bermaganman");
    }
    const admin = await this.adminService.findOne(adminId);

    if (!admin || !admin.refresh_token) {
      throw new NotFoundException("admin not found");
    }
    const tokenMatch = await bcrypt.compare(
      refreshTokenfromCookie,
      admin.refresh_token
    );

    if (!tokenMatch) {
      throw new ForbiddenException("forbidden");
    }

    const { accessToken, refreshToken } = await this.generateTokens(admin);

    const refresh_token = await bcrypt.hash(refreshToken, 7);
    await this.adminService.UdateRefreshToken(admin.id, refresh_token);

    res.cookie("refreshToken", refreshToken, {
      maxAge: Number(process.env.COOKIE_TIME),
      httpOnly: true,
    });

    const response = {
      message: "admin resfreshed",
      adminId: admin.id,
      accessToken: accessToken,
    };
    return response;
  }
}
