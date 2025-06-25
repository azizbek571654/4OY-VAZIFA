import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SavedItemsService } from './saved-items.service';
import { CreateSavedItemDto } from './dto/create-saved-item.dto';
import { UpdateSavedItemDto } from './dto/update-saved-item.dto';

@Controller('saved-items')
export class SavedItemsController {
  constructor(private readonly savedItemsService: SavedItemsService) {}

  @Post()
  create(@Body() createSavedItemDto: CreateSavedItemDto) {
    return this.savedItemsService.create(createSavedItemDto);
  }

  @Get()
  findAll() {
    return this.savedItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.savedItemsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSavedItemDto: UpdateSavedItemDto,
  ) {
    return this.savedItemsService.update(+id, updateSavedItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savedItemsService.remove(+id);
  }
}
