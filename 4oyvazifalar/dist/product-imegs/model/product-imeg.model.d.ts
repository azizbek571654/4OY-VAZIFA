import { Model } from 'sequelize-typescript';
import { CreateProductImegDto } from '../dto/create-product-imeg.dto';
import { Product } from '../../product/model/product.model';
export declare class ProductImeg extends Model<ProductImeg, CreateProductImegDto> {
    product_id: number;
    product: Product;
    img_url: string;
}
