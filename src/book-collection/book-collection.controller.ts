import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BookCollectionService } from './book-collection.service';
import { CreateBookCollectionDto } from './dto/create-book-collection.dto';
import { UpdateBookCollectionDto } from './dto/update-book-collection.dto';
import { IsCreatorGuard } from "../common/guard/isCreator.guard";
import { JwtAuthGuard } from "../common/guard/user.guard";
import { SelfGuart } from "../common/guard/self.guard";

@Controller("book-collection")
export class BookCollectionController {
  constructor(private readonly bookCollectionService: BookCollectionService) {}

  @UseGuards(IsCreatorGuard)
  @Post()
  create(@Body() createBookCollectionDto: CreateBookCollectionDto) {
    return this.bookCollectionService.create(createBookCollectionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.bookCollectionService.findAll();
  }
  
  @UseGuards(JwtAuthGuard, SelfGuart)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookCollectionService.findOne(+id);
  }
  
  @UseGuards(IsCreatorGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBookCollectionDto: UpdateBookCollectionDto
  ) {
    return this.bookCollectionService.update(+id, updateBookCollectionDto);
  }

  @UseGuards(IsCreatorGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookCollectionService.remove(+id);
  }
}
