import { ProductImegsService } from './product-imegs.service';
import { CreateProductImegDto } from './dto/create-product-imeg.dto';
import { UpdateProductImegDto } from './dto/update-product-imeg.dto';
export declare class ProductImegsController {
    private readonly productImegsService;
    constructor(productImegsService: ProductImegsService);
    create(createProductImegDto: CreateProductImegDto): Promise<{
        success: boolean;
        message: string;
        data: import("./model/product-imeg.model").ProductImeg;
    }>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        count: number;
        data: import("./model/product-imeg.model").ProductImeg[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        message: string;
        data: import("./model/product-imeg.model").ProductImeg;
    }>;
    update(id: string, updateProductImegDto: UpdateProductImegDto): Promise<{
        success: boolean;
        message: string;
        data: import("./model/product-imeg.model").ProductImeg;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
