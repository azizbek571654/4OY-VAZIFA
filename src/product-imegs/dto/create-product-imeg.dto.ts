import { ProductImeg } from '../model/product-imeg.model';

export class CreateProductImegDto implements Partial<ProductImeg> {
  product_id: number;
  img_url: string;
}
