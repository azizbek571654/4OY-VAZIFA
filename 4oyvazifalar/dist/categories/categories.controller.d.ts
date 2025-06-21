import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("./model/category.model").Category | "Category yaratilmadi">;
    findAll(): Promise<import("./model/category.model").Category[] | "Categorylar topilmadi">;
    findOne(id: string): Promise<import("./model/category.model").Category | "category topilmadi" | null>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("./model/category.model").Category | "category topilmadi">;
    remove(id: string): Promise<"category topilmadi" | {
        message: string;
    }>;
}
