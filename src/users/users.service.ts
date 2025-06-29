import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { ActivateUserDto } from "./dto/active-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password, confirum_password } = createUserDto;
    // console.log("1111111111111111111113", password);
    // console.log("22222222222222222222222", confirum_password);
    
    // if (password !== confirum_password) {
    //   throw new BadRequestException("paroller mos emas");
    // }
    // const hashed_password = await bcrypt.hash(password, 7);
    const nweUser = await this.userModel.create(createUserDto);
    return nweUser;
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }
  findUserByEmail(email: string) {
    return this.userModel.findOne({ where: { email }, raw:true });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update(updateUserDto, { where: { id }});
  }

  remove(id: number) {
    return this.userModel.destroy({ where: { id } });
  }

  async activeUser(activeRoleDto: ActivateUserDto) {
    const user = await this.userModel.findByPk(activeRoleDto.userId);
    if (!user) {
      throw new Error("Bunday foydalanuvchi mavjud emas");
    }
    user.is_active = true;
    await user.save();
    return "User activated";
  }
}
