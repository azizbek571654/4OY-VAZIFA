import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AudioPartsService } from './audio-parts.service';
import { CreateAudioPartDto } from './dto/create-audio-part.dto';
import { UpdateAudioPartDto } from './dto/update-audio-part.dto';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';

@Controller('audio-parts')
export class AudioPartsController {
  constructor(private readonly audioPartsService: AudioPartsService) {}

  @UseGuards(IsCreatorGuard)
  @Post()
  create(@Body() createAudioPartDto: CreateAudioPartDto) {
    return this.audioPartsService.create(createAudioPartDto);
  }
  
  @Get()
  findAll() {
    return this.audioPartsService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audioPartsService.findOne(+id);
  }
  
  @UseGuards(IsCreatorGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudioPartDto: UpdateAudioPartDto) {
    return this.audioPartsService.update(+id, updateAudioPartDto);
  }
  
  @UseGuards(IsCreatorGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audioPartsService.remove(+id);
  }
}
