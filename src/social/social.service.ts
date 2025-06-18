import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Social } from './model/social.model';
import { Category } from '../categories/model/category.model';
import { Kurier } from '../kurier/model/kurier.model';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class SocialService {
  constructor(
      @InjectModel(Social) private readonly SocialModel: typeof Social,
      // @InjectModel(Category) private readonly categoryModel: typeof Category,
      private readonly categorysrvise:  CategoriesService,

    ) {}

  async create(createSocialDto: CreateSocialDto) {
    try {
      const {category_id} = createSocialDto
      // const category = await this.categoryModel.findByPk(category_id)
      const category = await this.categorysrvise.findOne(category_id)
      if (!category) {
        throw new BadRequestException("bunday katrgory yoq ");
      }
      return await this.SocialModel.create(createSocialDto);
    } catch (error) {
      console.error(error);
      return 'social yaratilmadi';
    }
  }

  async findAll() {
    try {
      return await this.SocialModel.findAll({ include: [Category, Kurier]});
    } catch (error) {
      console.error(error);
      return 'sociallar topilmadi';
    }
  }

  async findOne(id: number) {
    try {
      return await this.SocialModel.findByPk(id);
    } catch (error) {
      console.error(error);
      return 'social topilmadi';
    }
  }

  async update(id: number, updateSocialDto: UpdateSocialDto) {
    try {
      const social = await this.SocialModel.findByPk(id);
      if (!social) return `social topilmadi`;
      return await social.update(updateSocialDto);
    } catch (error) {
      console.error(error);
      return 'social topilmadi';
    }
  }

  async remove(id: number) {
    try {
      const social = await this.SocialModel.findByPk(id);
      if (!social) return `social topilmadi`;
      await social.destroy();
      return { message: 'Deleted successfully' };
    } catch (error) {
      console.error(error);
      return 'social topilmadi';
    }
  }
}
