import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { CreateBookVersionDto } from './dto/create-book-version.dto';
import { UpdateBookVersionDto } from './dto/update-book-version.dto';
import { InjectModel } from "@nestjs/sequelize";
import { BookVersion } from "./model/book-version.model";

@Injectable()
export class BookVersionService {
  constructor(
        @InjectModel(BookVersion) private readonly bookVersionModel: typeof BookVersion
      ) {}
  create(createBookVersionDto: CreateBookVersionDto) {
    return this.bookVersionModel.create(createBookVersionDto);
  }

  findAll() {
    return this.bookVersionModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.bookVersionModel.findByPk(id);
  }

  async update(id: number, updateBookVersionDto: UpdateBookVersionDto) {
    const book_version = await this.bookVersionModel.update(updateBookVersionDto, {
      where: { id },
      returning: true,
    });
    return book_version[1][0];
  }

  async remove(id: number) {
    const result = await this.bookVersionModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - book_version o'chirildi`;
    }

    return `${id}- book_version  yo'q`;
  }
}
