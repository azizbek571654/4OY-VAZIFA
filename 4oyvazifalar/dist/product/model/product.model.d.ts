import { Model } from 'sequelize-typescript';
import { CreateProductDto } from '../dto/create-product.dto';
import { Admin } from '../../admin/model/admin.model';
import { ProductImeg } from '../../product-imegs/model/product-imeg.model';
import { Category } from '../../categories/model/category.model';
export declare class Product extends Model<Product, CreateProductDto> {
    creator_id: number;
    admin: Admin;
    name: string;
    description: string;
    product_images: number;
    in_stock: number;
    is_available: boolean;
    price: number;
    category_id: number;
    category: Category;
    productImeg: ProductImeg;
}
