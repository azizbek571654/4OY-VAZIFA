import { PartialType } from '@nestjs/swagger';
import { CreateResturantTableDto } from './create-resturant_table.dto';

export class UpdateResturantTableDto extends PartialType(
  CreateResturantTableDto,
) {}
