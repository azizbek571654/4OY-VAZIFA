import { Product } from '../model/product.model';
export declare class CreateProductDto implements Partial<Product> {
    creator_id: number;
    name: string;
    description: string;
    product_images: number;
    in_stock: number;
    is_available: boolean;
    price: number;
    category_id: number;
}
