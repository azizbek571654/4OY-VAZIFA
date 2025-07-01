import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Controller("genre")
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @UseGuards(IsCreatorGuard)
  @Post()
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  @Get()
  findAll() {
    return this.genreService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.genreService.findOne(+id);
  }
  @UseGuards(IsCreatorGuard)
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
