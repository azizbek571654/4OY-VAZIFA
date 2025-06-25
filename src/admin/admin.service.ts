import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './model/admin.model';
import { RolesService } from '../roles/roles.service';
import { Roles } from '../roles/model/role.model';
import { AddRoleDto } from './dto/add-role.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin)
    private readonly AdminModel: typeof Admin,
    private readonly rolesService: RolesService,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    try {
      const role = await this.rolesService.findRoleByValue(createAdminDto.role);
      if (!role) {
        throw new HttpException(
          {
            success: false,
            message: 'role topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      const newAdmin = await this.AdminModel.create(createAdminDto);
      await newAdmin.$set('roles', role.id);
      await newAdmin.save();
      return {
        success: true,
        message: 'Admin yaratildi',
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
          message: 'Admin yaratilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const admins = await this.AdminModel.findAll();
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
          message: 'Adminlar topilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOneADMIN(id: number) {
    try {
      const admin = await this.AdminModel.findByPk(id);
      if (!admin) {
        throw new HttpException(
          {
            success: false,
            message: 'Admin topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        message: 'Admin topildi',
        data: admin,
      };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'Adminni olishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async getUserByMail(email: string) {
    const user = await this.AdminModel.findOne({
      where: { email },
      include: {
        model: Roles,
        attributes: ['id', 'value'],
        // through:[attributes: []]
      },
    });
    return user?.dataValues;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    try {
      const admin = await this.AdminModel.findByPk(id);
      if (!admin) {
        throw new HttpException(
          {
            success: false,
            message: 'Admin topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      const updated = await admin.update(updateAdminDto);
      return {
        success: true,
        message: 'Admin yangilandi',
        data: updated,
      };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'Admin yangilanmadi',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async remove(id: number) {
    try {
      const admin = await this.AdminModel.findByPk(id);
      if (!admin) {
        throw new HttpException(
          {
            success: false,
            message: 'Admin topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      await admin.destroy();
      return {
        success: true,
        message: 'Admin ochirildi',
      };
    } catch (error) {
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'Adminni ochirishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async addRole(addRoleDto: AddRoleDto) {
    const user = await this.AdminModel.findByPk(addRoleDto.userId);
    if (!user) {
      throw new BadRequestException('bunday foydalanuvchi mavjud emas');
    }
    const role = await this.rolesService.findRoleByValue(addRoleDto.value);
    if (!role) {
      throw new HttpException(
        {
          success: false,
          message: 'role topilmadi',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    await user.$add('roles', role.id);

    const updatedUser = await this.AdminModel.findByPk(addRoleDto.userId, {
      include: { all: true },
    });
    return updatedUser;
  }

  async removeRole(addRoleDto: AddRoleDto) {
    const user = await this.AdminModel.findByPk(addRoleDto.userId);
    if (!user) {
      throw new BadRequestException('bunday foydalanuvchi mavjud emas');
    }
    const role = await this.rolesService.findRoleByValue(addRoleDto.value);
    if (!role) {
      throw new HttpException(
        {
          success: false,
          message: 'role topilmadi',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    await user.$remove('roles', role.id);

    const updatedUser = await this.AdminModel.findByPk(addRoleDto.userId, {
      include: { all: true },
    });
    return updatedUser;
  }
}
