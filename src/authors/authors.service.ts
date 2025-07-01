import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Author } from './model/author.model';

@Injectable()
export class AuthorsService {
  constructor(
        @InjectModel(Author) private readonly authorModel: typeof Author,
      ) {}
  create(createAuthorDto: CreateAuthorDto) {
    return this.authorModel.create(createAuthorDto);
  }

  findAll() {
    return this.authorModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.authorModel.findByPk(id);
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {const author = await this.authorModel.update(updateAuthorDto, {
    where: { id },
    returning: true,
  });
  return author[1][0];
  }

  async remove(id: number) {const result = await this.authorModel.destroy({ where: { id } });
  if (result > 0) {
    return `${id} - author o'chirildi`;
  }

  return `${id}- author  yo'q`;
  }
}