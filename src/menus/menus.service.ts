import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Menu } from './model/menu.model';
import { CategoryService } from '../category/category.service';
import { RestarantService } from '../restarant/restarant.service';
import { FilesService } from '../files/files.service';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu)
    private readonly MenuModel: typeof Menu,
    private readonly categoryService: CategoryService,
    private readonly restarantService: RestarantService,
    private readonly filesService: FilesService,
  ) {}
  async create(createMenuDto: CreateMenuDto, image_url: any) {
    const category = await this.categoryService.findOneCATEGORY(
      createMenuDto.category_id,
    );
    if (!category) {
      throw new NotFoundException('category id topilmadi');
    }
    const resturant_id = await this.restarantService.findOneRestarant(
      createMenuDto.resturant_id,
    );
    if (!resturant_id) {
      throw new NotFoundException('resturant id topilmadi');
    }
    const fileName = await this.filesService.saveFile(image_url);
    const newProduct = await this.MenuModel.create({
      ...createMenuDto,
      image_url: fileName,
    });
    return newProduct;
  }

  findAll() {
    return this.MenuModel.findAll({ include: { all: true } });
  }

  findOneMenu(id: number) {
    return this.MenuModel.findByPk(id);
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    const Menu = await this.MenuModel.update(updateMenuDto, {
      where: { id },
      returning: true,
    });
    return Menu[1][0];
  }

  async remove(id: number) {
    const result = await this.MenuModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - Menu o'chirildi`;
    }

    return `${id}- Menu  yo'q`;
  }
}
