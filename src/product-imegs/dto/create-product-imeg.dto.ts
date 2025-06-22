import { IsInt, IsPositive, IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { ProductImeg } from '../model/product-imeg.model';

export class CreateProductImegDto implements Partial<ProductImeg> {
  @IsInt({ message: 'Product ID butun son bolishi kerak' })
  @IsPositive({ message: 'Product ID musbat bolishi kerak' })
  product_id: number;

  @IsString({ message: 'Rasm URL satr bolishi kerak' })
  @IsNotEmpty({ message: 'Rasm URL bosh bolmasligi kerak' })
  @IsUrl({}, { message: 'Rasm URL notogri formatda' })
  img_url: string;
}
