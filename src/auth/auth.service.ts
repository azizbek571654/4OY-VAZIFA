import {
    Injectable,
    ConflictException,
    UnauthorizedException,
  } from '@nestjs/common';
  
  import * as bcrypt from 'bcrypt';
  import { JwtService } from '@nestjs/jwt';
  import { SigninUserDto } from '../admins/dto/signin-user.dto';
  import { Admin } from '../admins/model/admin.model';
  import { AdminsService } from '../admins/admins.service';
  import { CreateAdminDto } from '../admins/dto/create-admin-temp';
  @Injectable()
  export class AuthService {
    constructor(
      private readonly userServise: AdminsService,
      private readonly jwtServise: JwtService,
    ) {}
  
    private async generateToken(user: Admin) {
      const payload = {
        id: user.id,
        email: user.email,
        roles: user.role,
      };
      return { token: this.jwtServise.sign(payload) };
    }
  
    async signup(createUserDto: CreateAdminDto) {    
      const condidate = await this.userServise.getUserByMail(createUserDto.email);
      if (condidate) {
        throw new ConflictException('bunday foydalanuvchi mavjud');
      }
      const hashedpassword = await bcrypt.hash(createUserDto.Password, 7);
      createUserDto.Password = hashedpassword;
      const newuser = await this.userServise.create(createUserDto);
      return newuser;
    }
  
    async singin(signinUserDto: SigninUserDto) {
      const user = await this.userServise.getUserByMail(signinUserDto.email);
    //   console.log("USER >>>", user);
      if (!user) {
        throw new UnauthorizedException('Email yoki password notogri');
      }
      const validPassword = await bcrypt.compare(
        signinUserDto.password,
        user.Password,
      );
      
      if (!validPassword) {
        throw new UnauthorizedException('bunday foydalanuvchi mavjud emas');
      }
      const token = await this.generateToken(user);
      return { message: 'user Signed in', id: user.id, token };
    }
  }
  