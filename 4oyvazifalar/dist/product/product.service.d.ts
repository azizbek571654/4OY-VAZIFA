import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './model/product.model';
import { AdminService } from '../admin/admin.service';
import { CategoriesService } from '../categories/categories.service';
export declare class ProductService {
    private readonly productModel;
    private readonly adminService;
    private readonly CategoryService;
    constructor(productModel: typeof Product, adminService: AdminService, CategoryService: CategoriesService);
    create(createProductDto: CreateProductDto): Promise<{
        success: boolean;
        message: string;
        data: Product;
    }>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        count: number;
        data: Product[];
    }>;
    findOnePRODUCT(id: number): Promise<{
        success: boolean;
        message: string;
        data: Product;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
        success: boolean;
        message: string;
        data: Product;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
