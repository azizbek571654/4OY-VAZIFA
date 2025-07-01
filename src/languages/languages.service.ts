import { Injectable } from "@nestjs/common";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Language } from "./model/language.model";

@Injectable()
export class LanguagesService {
  constructor(
    @InjectModel(Language) private readonly languageModel: typeof Language
  ) {}
  create(createLanguageDto: CreateLanguageDto) {
    return this.languageModel.create(createLanguageDto);
  }

  findAll() {
    return this.languageModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.languageModel.findByPk(id);
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    const genre = await this.languageModel.update(updateLanguageDto, {
      where: { id },
      returning: true,
    });
    return genre[1][0];
  }

  async remove(id: number) {
    const result = await this.languageModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - genre o'chirildi`;
    }

    return `${id}- genre  yo'q`;
  }
}