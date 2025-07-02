import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { CreateAudioPartDto } from './dto/create-audio-part.dto';
import { UpdateAudioPartDto } from './dto/update-audio-part.dto';
import { InjectModel } from "@nestjs/sequelize";
import { AudioPart } from "./model/audio-part.model";

@Injectable()
export class AudioPartsService {
  constructor(
      @InjectModel(AudioPart) private readonly audioPartModel: typeof AudioPart
    ) {}
  create(createAudioPartDto: CreateAudioPartDto) {
    return this.audioPartModel.create(createAudioPartDto);
  }

  findAll() {
    return this.audioPartModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.audioPartModel.findByPk(id);
  }

  async update(id: number, updateAudioPartDto: UpdateAudioPartDto) {
    const Adiopart = await this.audioPartModel.update(updateAudioPartDto, {
      where: { id },
      returning: true,
    });
    return Adiopart[1][0];
  }

  async remove(id: number) {
    const result = await this.audioPartModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - Adiopart o'chirildi`;
    }

    return `${id}- Adiopart  yo'q`;
  }
}
