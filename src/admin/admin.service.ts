import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./model/admin.model";
import * as bcrypt from "bcrypt";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly adminModel: typeof Admin) {}

  async create(createAdminDto: CreateAdminDto) {
    const { password } = createAdminDto;
    const hashed_password = await bcrypt.hash(password, 7);

    const newAdmin = await this.adminModel.create({
      ...createAdminDto,
      password: hashed_password,
    });
    console.log(newAdmin.activation_link);
    return newAdmin;
  }

  findAll() {
    return this.adminModel.findAll();
  }

  async findOne(id: number) {
    const admin = await this.adminModel.findByPk(id);

    if (!admin) {
      throw new NotFoundException(`admin with ID ${id} not found`);
    }

    return admin;
  }

  findadminByEmail(email: string) {
    return this.adminModel.findOne({ where: { email } });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const user = await this.findOne(id);

    if (updateAdminDto.password) {
      const hashed_password = await bcrypt.hash(updateAdminDto.password, 7);
      updateAdminDto.password = hashed_password;
    }

    await user.update(updateAdminDto);

    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }

  async UdateRefreshToken(id: number, refresh_token: string) {
    const uddatedUser = await this.adminModel.update(
      { refresh_token },
      {
        where: { id },
      }
    );
    return uddatedUser;
  }

  async activateAser(link: string) {
    if (!link) {
      throw new BadRequestException("Activation link not found");
    }
    const uptadeUser = await this.adminModel.update(
      { is_active: true },
      {
        where: {
          activation_link: link,
          is_active: false,
        },
        returning: true,
      }
    );
    if (!uptadeUser[1][0]) {
      throw new BadRequestException("User already activate");
    }
    return {
      message: "User activate successfully",
      is_active: uptadeUser[1][0].is_active,
    };
  }
}
