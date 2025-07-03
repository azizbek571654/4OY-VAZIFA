import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BookMarksService } from './book-marks.service';
import { CreateBookMarkDto } from './dto/create-book-mark.dto';
import { UpdateBookMarkDto } from './dto/update-book-mark.dto';
import { IsCreatorGuard } from "../common/guard/isCreator.guard";
import { JwtAuthGuard } from "../common/guard/user.guard";
import { SelfGuart } from "../common/guard/self.guard";


@Controller("book-marks")
export class BookMarksController {
  constructor(private readonly bookMarksService: BookMarksService) {}

  @UseGuards(IsCreatorGuard)
  @Post()
  create(@Body() createBookMarkDto: CreateBookMarkDto) {
    return this.bookMarksService.create(createBookMarkDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.bookMarksService.findAll();
  }

  @UseGuards(JwtAuthGuard, SelfGuart)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookMarksService.findOne(+id);
  }

  @UseGuards(IsCreatorGuard)
  @UseGuards(SelfGuart)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBookMarkDto: UpdateBookMarkDto
  ) {
    return this.bookMarksService.update(+id, updateBookMarkDto);
  }

  @UseGuards(IsCreatorGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookMarksService.remove(+id);
  }
}
