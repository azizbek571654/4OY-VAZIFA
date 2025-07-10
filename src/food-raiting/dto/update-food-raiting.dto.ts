import { PartialType } from '@nestjs/swagger';
import { CreateFoodRaitingDto } from './create-food-raiting.dto';

export class UpdateFoodRaitingDto extends PartialType(CreateFoodRaitingDto) {}
