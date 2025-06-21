import { CreateProductImegDto } from './dto/create-product-imeg.dto';
import { UpdateProductImegDto } from './dto/update-product-imeg.dto';
import { ProductImeg } from './model/product-imeg.model';
import { ProductService } from '../product/product.service';
export declare class ProductImegsService {
    private readonly productImegsModel;
    private readonly productservise;
    constructor(productImegsModel: typeof ProductImeg, productservise: ProductService);
    create(createProductImegDto: CreateProductImegDto): Promise<{
        success: boolean;
        message: string;
        data: ProductImeg;
    }>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        count: number;
        data: ProductImeg[];
    }>;
    findOneProductIMG(id: number): Promise<{
        success: boolean;
        message: string;
        data: ProductImeg;
    }>;
    update(id: number, updateProductImegDto: UpdateProductImegDto): Promise<{
        success: boolean;
        message: string;
        data: ProductImeg;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
