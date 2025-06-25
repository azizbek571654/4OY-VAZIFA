import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';

import * as bcript from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SigninUserDto } from '../admin/dto/signin-user.Dto';
import { Admin } from '../admin/model/admin.model';
import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly userServise: AdminService,
    private readonly jwtServise: JwtService,
  ) {}

  private async generateToken(user: Admin) {
    const payload = {
      id: user.id,
      email: user.email,
      roles: user.roles,
    };
    return { token: this.jwtServise.sign(payload) };
  }

  async signup(createUserDto: CreateAdminDto) {
    const condidate = await this.userServise.getUserByMail(createUserDto.email);
    if (condidate) {
      throw new ConflictException('bunday foydalanuvchi mavjud');
    }
    const hashedpassword = await bcript.hash(createUserDto.password, 7);
    createUserDto.password = hashedpassword;
    const newuser = await this.userServise.create(createUserDto);
    return newuser;
  }

  async singin(SigninUserDto: SigninUserDto) {
    const user = await this.userServise.getUserByMail(SigninUserDto.email);
    if (!user) {
      throw new UnauthorizedException('Email yoki password notogri');
    }
    const validPassword = await bcript.compare(
      SigninUserDto.password,
      user.password,
    );
    if (!validPassword) {
      throw new UnauthorizedException('bunday foydalanuvchi mavjud emas');
    }
    const token = await this.generateToken(user);
    return { message: 'user Signed in', id: user.id, token };
  }
}
