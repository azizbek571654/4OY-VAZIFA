import { PartialType } from '@nestjs/swagger';
import { CreateProductReweiwDto } from './create-product-reweiw.dto';

export class UpdateProductReweiwDto extends PartialType(
  CreateProductReweiwDto,
) {}
