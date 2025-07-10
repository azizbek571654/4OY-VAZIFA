import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './model/category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private readonly categoryModel: typeof Category,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto);
  }

  findAll() {
    return this.categoryModel.findAll({ include: { all: true } });
  }

  findOneCATEGORY(id: number) {
    return this.categoryModel.findByPk(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryModel.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });
    return category[1][0];
  }

  async remove(id: number) {
    const result = await this.categoryModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - category o'chirildi`;
    }

    return `${id}- category  yo'q`;
  }
}
