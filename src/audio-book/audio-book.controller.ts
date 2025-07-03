import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AudioBookService } from './audio-book.service';
import { CreateAudioBookDto } from './dto/create-audio-book.dto';
import { UpdateAudioBookDto } from './dto/update-audio-book.dto';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';
import { JwtAuthGuard } from '../common/guard/user.guard';
import { SelfGuart } from '../common/guard/self.guard';

@Controller('audio-book')
export class AudioBookController {
  constructor(private readonly audioBookService: AudioBookService) {}

  @UseGuards(IsCreatorGuard)
  @Post()
  create(@Body() createAudioBookDto: CreateAudioBookDto) {
    return this.audioBookService.create(createAudioBookDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.audioBookService.findAll();
  }
  
  @UseGuards(JwtAuthGuard, SelfGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audioBookService.findOne(+id);
  }
  
  @UseGuards(IsCreatorGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudioBookDto: UpdateAudioBookDto) {
    return this.audioBookService.update(+id, updateAudioBookDto);
  }
  
  @UseGuards(IsCreatorGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audioBookService.remove(+id);
  }
}
