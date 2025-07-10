import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './model/language.model';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language) private readonly languageModel: typeof Language,
  ) {}

   
  async createdefaultLanguage(createLanguageDto: CreateLanguageDto) {
    const defaultLang = await this.languageModel.create({
      name: "uzbek"
    });
    console.log('language created SUCCESFUL ✅');
    return defaultLang;
  }

  create(createLanguageDto: CreateLanguageDto) {
    return this.languageModel.create(createLanguageDto);
  }

  findAll() {
    return this.languageModel.findAll({ include: { all: true } });
  }

  findOneLanguage(id: number) {
    return this.languageModel.findByPk(id);
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    const Language = await this.languageModel.update(updateLanguageDto, {
      where: { id },
      returning: true,
    });
    return Language[1][0];
  }

  async remove(id: number) {
    const result = await this.languageModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - Language o'chirildi`;
    }

    return `${id}- Language  yo'q`;
  }
}
