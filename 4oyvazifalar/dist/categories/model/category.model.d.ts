import { Model } from 'sequelize-typescript';
import { Product } from '../../product/model/product.model';
export declare class Category extends Model<Category, {
    name: string;
    description: string;
}> {
    name: string;
    description: string;
    product: Product;
}
