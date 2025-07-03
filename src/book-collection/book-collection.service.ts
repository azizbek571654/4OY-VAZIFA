import { Injectable } from "@nestjs/common";
import { CreateBookCollectionDto } from "./dto/create-book-collection.dto";
import { UpdateBookCollectionDto } from "./dto/update-book-collection.dto";
import { InjectModel } from "@nestjs/sequelize";
import { BookCollection } from "./model/book-collection.model";

@Injectable()
export class BookCollectionService {
  constructor(
    @InjectModel(BookCollection)
    private readonly bookCollectionModel: typeof BookCollection
  ) {}

  create(createBookCollectionDto: CreateBookCollectionDto) {
    return this.bookCollectionModel.create(createBookCollectionDto);
  }

  findAll() {
    return this.bookCollectionModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.bookCollectionModel.findByPk(id);
  }

  async update(id: number, updateBookCollectionDto: UpdateBookCollectionDto) {const author = await this.bookCollectionModel.update(updateBookCollectionDto, {
    where: { id },
    returning: true,
  });
  return author[1][0];
  }

  async remove(id: number) {const result = await this.bookCollectionModel.destroy({ where: { id } });
  if (result > 0) {
    return `${id} - author o'chirildi`;
  }

  return `${id}- author  yo'q`;
  }
}