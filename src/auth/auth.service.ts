import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcript from "bcrypt"
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/model/user.model';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignUserDto } from '../users/dto/login';

@Injectable()
export class AuthService {
  constructor(
    private readonly userServise: UsersService,
    private readonly jwtServise: JwtService
  ) {}

  async generateToken(user: User) {
    const payload = {
      id: user.id,
      is_active: user.is_active,
      ispreimum: user.is_premium,
    };
    const token = this.jwtServise.sign(payload);
    return token;
  }

  async signup(createUserDto: CreateUserDto) {
    const condidate = await this.userServise.findUserByEmail(
      createUserDto.email
    );
    const { password, confirum_password } = createUserDto;
    if (password !== confirum_password) {
      throw new BadRequestException("paroller mos emas");
    }
    if (condidate) {
      throw new ConflictException("bunday foydalanuvchi mavjud");
    }
    const hashedpassword = await bcript.hash(createUserDto.password, 7);
    const hashedpassword1 = await bcript.hash(
      createUserDto.confirum_password,
      7
    );
    createUserDto.password = hashedpassword;
    createUserDto.confirum_password = hashedpassword1;
    const newuser = await this.userServise.create(createUserDto);
    return newuser;
  }

  async signin(signUserDto: SignUserDto) {
    const user = await this.userServise.findUserByEmail(signUserDto.email);
    if (!user) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    // Muhim loglar
    console.log("USER FROM DB:", user);
    console.log("INPUT PASSWORD:", signUserDto.password);
    console.log("HASHED PASSWORD:", user.password);

    // Try-Catch bilan xavfsiz compare
    try {
      const validPassword = await bcript.compare(
        signUserDto.password,
        user.password
      );

      if (!validPassword) {
        throw new UnauthorizedException("Parol noto'g'ri");
      }

      const token = await this.generateToken(user);
      return { message: "user Signed in", id: user.id, token };
    } catch (error) {
      console.error("Compare xatosi:", error);
      throw new UnauthorizedException(
        "Kirishda xatolik: parolni tekshirib bo'lmadi"
      );
    }
  }

  async signout(userId: number) {
    const user = await this.userServise.findOne(userId);
    if (!user) {
      throw new BadRequestException("Bunday foydalanuvchi mavjud emas");
    }

    // Refresh tokenni null qilib DBga saqlaymiz
    user.refresh_token = null;
    await user.save();

    return { message: "User successfully signed out" };
  }
}