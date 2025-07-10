import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './model/user.model';
import { ConfigService } from '@nestjs/config';
import { Gender, Roles } from '../common/enum';
import * as bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { LanguageService } from '../language/language.service';
import { CreateSuperAdminDto } from './dto/supperadmindto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly configService: ConfigService,
    private readonly languageService: LanguageService,
  ) {}

  async createSuperAdmin() {
    const exists = await this.userModel.findOne({
      where: { role: Roles.SUPERADMIN },
    });

    if (exists) {
      const superAdmin1 = await this.userModel.update(
        {
          name: process.env.SUPERADMIN_NAME!,
          username: process.env.SUPERADMIN_USERNAME!,
          email: process.env.SUPERADMIN_EMAIL!,
          phone: process.env.SUPERADMIN_PHONE!,
          password: await bcrypt.hash(process.env.SUPERADMIN_PASSWORD!, 10),
          role: Roles.SUPERADMIN,
          gender: process.env.SUPERADMIN_GENDER as Gender,
          age: Number(process.env.SUPERADMIN_AGE),
          is_active: true,
          is_banned: false,
          language_id: Number(process.env.SUPERADMIN_LANG_ID),
          activation_link: uuidv4(),
          banned_until: new Date(),
        },
        {
          where: { role: Roles.SUPERADMIN },
        },
      );
      console.log('Super admin updated SUCCESFUL ✅');
      return superAdmin1;
    }

    const superAdmin = await this.userModel.create({
      name: process.env.SUPERADMIN_NAME!,
      username: process.env.SUPERADMIN_USERNAME!,
      email: process.env.SUPERADMIN_EMAIL!,
      phone: process.env.SUPERADMIN_PHONE!,
      password: await bcrypt.hash(process.env.SUPERADMIN_PASSWORD!, 10),
      role: Roles.SUPERADMIN,
      gender: process.env.SUPERADMIN_GENDER as Gender,
      age: Number(process.env.SUPERADMIN_AGE),
      is_active: true,
      is_banned: false,
      language_id: Number(process.env.SUPERADMIN_LANG_ID),
      activation_link: uuidv4(),
      banned_until: new Date(),
    });

    console.log('Super admin created SUCCESFUL ✅');
    return superAdmin;
  }

  async create(createUserDto: CreateUserDto, currentUser?: any) {
    try {
      const language = await this.languageService.findOneLanguage(
        createUserDto.language_id,
      );
      if (!language) {
        throw new NotFoundException('language id topilmadi');
      }
      const newuser = await this.userModel.create(createUserDto);
      return { createUserDto };
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: 'user yaratilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const users = await this.userModel.findAll();
      return { users };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: 'userlar topilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOneuser(id: number) {
    try {
      return await this.userModel.findByPk(id);
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'userni olishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async getUserByMail(email: string) {
    return this.userModel.findOne({
      where: { email },
      attributes: ['id', 'email', 'password', 'role', 'is_active', 'is_banned'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userModel.findByPk(id);
      if (!user) {
        throw new HttpException(
          {
            success: false,
            message: 'user topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      const updated = await user.update(updateUserDto);
      return { updateUserDto };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'user yangilanmadi',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async remove(id: number) {
    try {
      const user = await this.userModel.findByPk(id);
      if (!user) {
        throw new HttpException(
          {
            success: false,
            message: 'user topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      await user.destroy();
      return {
        success: true,
        message: 'user ochirildi',
      };
    } catch (error) {
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'userni ochirishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async uptadeRefreshToken(id: number, refresh_token: string) {
    const uptadeUser = await this.userModel.update(
      { refresh_token },
      {
        where: { id },
      },
    );
    return uptadeUser;
  }

  async findByActivationLink(link: string): Promise<User | null> {
    return this.userModel.findOne({ where: { activation_link: link } });
  }

  async activateUser(link: string) {
    if (!link) {
      throw new BadRequestException('Activation link not found');
    }

    const [affectedCount] = await this.userModel.update(
      { is_active: true },
      {
        where: { activation_link: link },
        // where: { activation_link: link, is_active: false },
      },
    );

    if (affectedCount === 0) {
      throw new NotFoundException(
        'Aktivatsiya havolasi noto‘g‘ri yoki eskirgan',
      );
    }

    return {
      message: 'User activate successfully',
      is_active: true,
      statusCode: 200,
    };
  }
}
