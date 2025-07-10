import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRestarantDto } from './dto/create-restarant.dto';
import { UpdateRestarantDto } from './dto/update-restarant.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Restarant } from './model/restarant.model';
import { UserService } from '../users/users.service';
import { CategoryService } from '../category/category.service';

@Injectable()
export class RestarantService {
  constructor(
    @InjectModel(Restarant)
    private readonly restarantModel: typeof Restarant,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService,
  ) {}
  async create(createRestarantDto: CreateRestarantDto) {
    const user = await this.userService.findOneuser(
      createRestarantDto.owner_id,
    );
    if (!user) {
      throw new NotFoundException('SELLER id topilmadi');
    }
    if (user.role !== 'seller') {
      throw new BadRequestException('owner_id ni roli seller emas');
    }
    const category = await this.categoryService.findOneCATEGORY(
      createRestarantDto.catrgory_id,
    );
    if (!category) {
      throw new NotFoundException('category id topilmadi');
    }
    return this.restarantModel.create(createRestarantDto);
  }

  findAll() {
    return this.restarantModel.findAll({ include: { all: true } });
  }

  findOneRestarant(id: number) {
    return this.restarantModel.findByPk(id);
  }

  async update(id: number, updateRestarantDto: UpdateRestarantDto) {
    const Restarant = await this.restarantModel.update(updateRestarantDto, {
      where: { id },
      returning: true,
    });
    return Restarant[1][0];
  }

  async remove(id: number) {
    const result = await this.restarantModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - Restarant o'chirildi`;
    }

    return `${id}- Restarant  yo'q`;
  }
}
