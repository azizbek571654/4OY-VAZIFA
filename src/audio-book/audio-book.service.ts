import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { CreateAudioBookDto } from "./dto/create-audio-book.dto";
import { UpdateAudioBookDto } from "./dto/update-audio-book.dto";
import { InjectModel } from "@nestjs/sequelize";
import { AudioBook } from "./model/audio-book.model";

@Injectable()
export class AudioBookService {
  constructor(
    @InjectModel(AudioBook) private readonly audioBookModel: typeof AudioBook
  ) {}
  create(createAudioBookDto: CreateAudioBookDto) {
    return this.audioBookModel.create(createAudioBookDto);
  }

  findAll() {
    return this.audioBookModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.audioBookModel.findByPk(id);
  }

  async update(id: number, updateAudioBookDto: UpdateAudioBookDto) {
    const audiobook = await this.audioBookModel.update(updateAudioBookDto, {
      where: { id },
      returning: true,
    });
    return audiobook[1][0];
  }

  async remove(id: number) {
    const result = await this.audioBookModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - audiobook o'chirildi`;
    }

    return `${id}- audiobook  yo'q`;
  }
}
