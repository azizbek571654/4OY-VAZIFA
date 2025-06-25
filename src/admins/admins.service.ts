import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAdminDto } from './dto/create-admin-temp';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './model/admin.model';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admin)
    private readonly adminModel: typeof Admin,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    try {
      const newAdmin = await this.adminModel.create(createAdminDto);
      return {
        success: true,
        message: 'admin yaratildi',
        data: newAdmin,
      };
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: 'admin yaratilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const admins = await this.adminModel.findAll();
      return {
        success: true,
        message: 'Barcha adminlar',
        count: admins.length,
        data: admins,
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: 'adminlar topilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      const admin = await this.adminModel.findByPk(id);
      if (!admin) {
        throw new HttpException(
          {
            success: false,
            message: 'admin topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        message: 'admin topildi',
        data: admin,
      };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'adminni olishda xatolik12334',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    try {
      const admin = await this.adminModel.findByPk(id);
      if (!admin) {
        throw new HttpException(
          {
            success: false,
            message: 'admin topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      const updated = await admin.update(updateAdminDto);
      return {
        success: true,
        message: 'admin yangilandi',
        data: updated,
      };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'admin yangilanmadi',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async remove(id: number) {
    try {
      const admin = await this.adminModel.findByPk(id);
      if (!admin) {
        throw new HttpException(
          {
            success: false,
            message: 'admin topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      await admin.destroy();
      return {
        success: true,
        message: 'admin ochirildi',
      };
    } catch (error) {
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'adminni ochirishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async getUserByMail(email: string) {
    
    const user = await this.adminModel.findOne({
      where: { email },
    });
    return user?.dataValues;
}
}
