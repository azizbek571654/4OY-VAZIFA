import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';
import { JwtAuthGuard } from '../common/guard/user.guard';
import { SelfGuart } from '../common/guard/self.guard';

@Controller("genre")
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @UseGuards(IsCreatorGuard)
  @Post()
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.genreService.findAll();
  }

  @UseGuards(JwtAuthGuard, SelfGuart)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.genreService.findOne(+id);
  }
  @UseGuards(IsCreatorGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genreService.update(+id, updateGenreDto);
  }
  @UseGuards(IsCreatorGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.genreService.remove(+id);
  }
}
