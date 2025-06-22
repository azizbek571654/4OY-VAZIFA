import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsPositive,
  MaxLength,
  Min,
  IsOptional,
} from 'class-validator';
import { Product } from '../model/product.model';

export class CreateProductDto implements Partial<Product> {
  @IsInt({ message: 'Creator ID butun son bolishi kerak' })
  @IsPositive({ message: 'Creator ID musbat son bolishi kerak' })
  creator_id: number;

  @IsString({ message: 'Mahsulot nomi satr bolishi kerak' })
  @IsNotEmpty({ message: 'Mahsulot nomi bosh bolmasligi kerak' })
  @MaxLength(100, { message: 'Mahsulot nomi 100 belgidan oshmasligi kerak' })
  name: string;

  @IsString({ message: 'Tavsif satr bolishi kerak' })
  @IsOptional()
  @MaxLength(255, { message: 'Tavsif 255 belgidan oshmasligi kerak' })
  description: string;

  @IsInt({ message: 'Rasm soni butun son bolishi kerak' })
  @IsOptional()
  @Min(0, { message: 'Rasm soni 0 yoki undan katta bolishi kerak' })
  product_images: number;

  @IsInt({ message: 'Ombordagi soni butun son bolishi kerak' })
  @Min(0, { message: 'Ombordagi soni 0 yoki undan katta bolishi kerak' })
  in_stock: number;

  @IsBoolean({ message: 'Mavjudlik true yoki false bolishi kerak' })
  is_available: boolean;

  @IsPositive({ message: 'Narx musbat son bolishi kerak' })
  price: number;

  @IsInt({ message: 'Category ID butun son bolishi kerak' })
  @IsPositive({ message: 'Category ID musbat son bolishi kerak' })
  category_id: number;
}
