import { IsInt, IsPositive, IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { ProductImeg } from '../model/product-imeg.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductImegDto implements Partial<ProductImeg> {
  @ApiProperty({ example: 7, description: 'Mahsulotga tegishli ID raqam' })
  @IsInt({ message: 'Product ID butun son bolishi kerak' })
  @IsPositive({ message: 'Product ID musbat bolishi kerak' })
  product_id: number;
  
  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'Mahsulot rasm URL manzili' })
  @IsString({ message: 'Rasm URL satr bolishi kerak' })
  @IsNotEmpty({ message: 'Rasm URL bosh bolmasligi kerak' })
  @IsUrl({}, { message: 'Rasm URL notogri formatda' })
  img_url: string;
}
