import { PartialType } from '@nestjs/mapped-types';
import { CreateProductImegDto } from './create-product-imeg.dto';

export class UpdateProductImegDto extends PartialType(CreateProductImegDto) {}
