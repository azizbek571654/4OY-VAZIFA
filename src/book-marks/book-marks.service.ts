import { Injectable } from '@nestjs/common';
import { CreateBookMarkDto } from './dto/create-book-mark.dto';
import { UpdateBookMarkDto } from './dto/update-book-mark.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BookMark } from './model/book-mark.model';

@Injectable()
export class BookMarksService {
  constructor(
    @InjectModel(BookMark) private readonly bookMarkModel: typeof BookMark
  ) {}

  create(createBookMarkDto: CreateBookMarkDto) {
    return this.bookMarkModel.create(createBookMarkDto);
  }

  findAll() {
    return this.bookMarkModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.bookMarkModel.findByPk(id);
  }

  async update(id: number, updateBookMarkDto: UpdateBookMarkDto) {
    const author = await this.bookMarkModel.update(updateBookMarkDto, {
      where: { id },
      returning: true,
    });
    return author[1][0];
  }

  async remove(id: number) {
    const result = await this.bookMarkModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - author o'chirildi`;
    }

    return `${id}- author  yo'q`;
  }
}