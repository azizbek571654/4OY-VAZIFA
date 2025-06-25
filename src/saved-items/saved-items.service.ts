import { Injectable } from '@nestjs/common';
import { CreateSavedItemDto } from './dto/create-saved-item.dto';
import { UpdateSavedItemDto } from './dto/update-saved-item.dto';

@Injectable()
export class SavedItemsService {
  create(createSavedItemDto: CreateSavedItemDto) {
    return 'This action adds a new savedItem';
  }

  findAll() {
    return `This action returns all savedItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} savedItem`;
  }

  update(id: number, updateSavedItemDto: UpdateSavedItemDto) {
    return `This action updates a #${id} savedItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} savedItem`;
  }
}
