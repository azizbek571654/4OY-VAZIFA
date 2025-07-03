import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BookVersionService } from './book-version.service';
import { CreateBookVersionDto } from './dto/create-book-version.dto';
import { UpdateBookVersionDto } from './dto/update-book-version.dto';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';
import { JwtAuthGuard } from '../common/guard/user.guard';
import { SelfGuart } from '../common/guard/self.guard';

@Controller('book-version')
export class BookVersionController {
  constructor(private readonly bookVersionService: BookVersionService) {}
  
  @UseGuards(IsCreatorGuard)
  @Post()
  create(@Body() createBookVersionDto: CreateBookVersionDto) {
    return this.bookVersionService.create(createBookVersionDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.bookVersionService.findAll();
  }
  
  @UseGuards(JwtAuthGuard, SelfGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookVersionService.findOne(+id);
  }
  
  @UseGuards(IsCreatorGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookVersionDto: UpdateBookVersionDto) {
    return this.bookVersionService.update(+id, updateBookVersionDto);
  }
  
  @UseGuards(IsCreatorGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookVersionService.remove(+id);
  }
}
