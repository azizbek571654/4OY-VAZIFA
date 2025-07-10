import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotAcceptableException,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserService } from '../users/users.service';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { MailService } from '../mail/mail.service';
import { User } from '../users/model/user.model';
import { SigninUserDto } from '../users/dto/signin-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}

  async generateToken(user: User) {
    const payload = {
      id: user.id,
      role: user.role,
      is_active: user.is_active,
      is_premimum: user.is_banned,
    };
    console.log('TOKEN PAYLOAD:', payload);
    console.log('TOKEN ROLE:', payload.role);

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

  async signUp(createUserDto: CreateUserDto) {
    const condidate = await this.userService.getUserByMail(createUserDto.email);
    if (condidate) {
      throw new ConflictException('Bunday foydalanuvchi mavjud');
    }

    const activation_link = uuid();

    try {
      await this.mailService.sendMail({
        email: createUserDto.email,
        name: createUserDto.name,
        activation_link,
      });
      const hashedPassword = await bcrypt.hash(createUserDto.password, 7);

      await this.userService.create({
        ...createUserDto,
        password: hashedPassword,
        activation_link,
      });

      return {
        message: 'Ro‘yxatdan o‘tdingiz. Emailni tasdiqlang.',
      };
    } catch (error) {
      console.log(error);
      throw new ServiceUnavailableException('Emailga xat yuborishda xatolik');
    }
  }

  async signIn(signInUserDto: SigninUserDto, res: Response) {
    const user = await this.userService.getUserByMail(signInUserDto.email);
    if (!user) {
      throw new UnauthorizedException('Email yoki pasword natogri');
    }
    const isMatch = await bcrypt.compare(signInUserDto.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Email yoki pasword natogri');
    }
    const { accessToken, refreshToken } = await this.generateToken(user);
    user.refresh_token = await bcrypt.hash(refreshToken, 7);
    await user.save();

    res.cookie('refreshToken', refreshToken, {
      maxAge: +process.env.COOKIE_TIME!,
      httpOnly: true,
    });
    return { message: 'Tizimga hush kelibsiz', id: user.id, accessToken };
  }

  async signOut(refreshToken: string, res: Response) {
    let userData: any;
    try {
      userData = await this.jwtService.verify(refreshToken, {
        secret: process.env.REFRESH_TOKEN_KEY,
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
    if (!userData) {
      throw new ForbiddenException('User not found');
    }
    await this.userService.uptadeRefreshToken(userData.id, '');

    res.clearCookie('refreshToken');
    return {
      message: 'User logged out successfuly',
    };
  }

  async refreshToken(
    userId: number,
    refreshTokenFromCookie: string,
    res: Response,
  ) {
    const decodeToken = await this.jwtService.decode(refreshTokenFromCookie);
    console.log(userId);
    console.log(decodeToken['id']);

    if (userId !== decodeToken['id']) {
      throw new ForbiddenException('Ruxsat etilmagan');
    }
    const user = await this.userService.findOneuser(userId);

    if (!user || !user.refresh_token) {
      throw new NotAcceptableException('user no found');
    }
    const tokenMatch = await bcrypt.compare(
      refreshTokenFromCookie,
      user.refresh_token,
    );

    if (!tokenMatch) {
      throw new ForbiddenException('Forbiden');
    }
    const { accessToken, refreshToken } = await this.generateToken(user);

    const refresh_token = await bcrypt.hash(refreshToken, 7);
    await this.userService.uptadeRefreshToken(user.id, refresh_token);

    res.cookie('refreshToken', refreshToken, {
      maxAge: Number(process.env.COOKIE_TIME),
      httpOnly: true,
    });

    const response = {
      message: 'User already',
      userId: user.id,
      accessToken: accessToken,
    };
    return response;
  }
}
