import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';
import { JwtAuthGuard } from '../common/guard/user.guard';
import { SelfGuart } from '../common/guard/self.guard';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @UseGuards(IsCreatorGuard)
  @Post()
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languagesService.create(createLanguageDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.languagesService.findAll();
  }
  
  @UseGuards(JwtAuthGuard, SelfGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languagesService.findOne(+id);
  }
  
  @UseGuards(IsCreatorGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageDto: UpdateLanguageDto) {
    return this.languagesService.update(+id, updateLanguageDto);
  }
  
  @UseGuards(IsCreatorGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languagesService.remove(+id);
  }
}
