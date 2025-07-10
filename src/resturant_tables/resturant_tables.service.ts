import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResturantTableDto } from './dto/create-resturant_table.dto';
import { UpdateResturantTableDto } from './dto/update-resturant_table.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ResturantTable } from './model/resturant_table.model';
import { RestarantService } from '../restarant/restarant.service';

@Injectable()
export class ResturantTableService {
  constructor(
    @InjectModel(ResturantTable)
    private readonly resturantTablesModel: typeof ResturantTable,
    private readonly restarantService: RestarantService,
  ) {}
  async create(createResturantTablesDto: CreateResturantTableDto) {
    const restarant = await this.restarantService.findOneRestarant(
      createResturantTablesDto.returant_id,
    );
    if (!restarant) {
      throw new NotFoundException('Restarant topilmadi');
    }

    return this.resturantTablesModel.create(createResturantTablesDto);
  }

  findAll() {
    return this.resturantTablesModel.findAll({ include: { all: true } });
  }

  findOneResturantTables(id: number) {
    return this.resturantTablesModel.findByPk(id);
  }

  async update(id: number, updateResturantTablesDto: UpdateResturantTableDto) {
    const ResturantTables = await this.resturantTablesModel.update(
      updateResturantTablesDto,
      {
        where: { id },
        returning: true,
      },
    );
    return ResturantTables[1][0];
  }

  async remove(id: number) {
    const result = await this.resturantTablesModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - ResturantTables o'chirildi`;
    }

    return `${id}- ResturantTables  yo'q`;
  }
}
