import { PartialType } from '@nestjs/swagger';
import { CreateRestarantDto } from './create-restarant.dto';

export class UpdateRestarantDto extends PartialType(CreateRestarantDto) {}
