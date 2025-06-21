import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<{
        success: boolean;
        message: string;
        data: import("./model/product.model").Product;
    }>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        count: number;
        data: import("./model/product.model").Product[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        message: string;
        data: import("./model/product.model").Product;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        success: boolean;
        message: string;
        data: import("./model/product.model").Product;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
