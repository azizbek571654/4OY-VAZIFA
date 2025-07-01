import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Genre } from "./model/genre.model";

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre) private readonly genreModel: typeof Genre,
  ) {}
  create(createGenreDto: CreateGenreDto) {
    return this.genreModel.create(createGenreDto)
  }

  findAll() {
    return this.genreModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.genreModel.findByPk(id);
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    const genre = await this.genreModel.update(updateGenreDto, {
      where: { id },
      returning: true,
    });
    return genre[1][0];
  }

  async remove(id: number) {
    const result = await this.genreModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - genre o'chirildi`;
    }

    return `${id}- genre  yo'q`;
  }
}
