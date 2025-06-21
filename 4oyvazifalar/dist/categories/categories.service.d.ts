import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './model/category.model';
export declare class CategoriesService {
    private readonly CategoryModel;
    constructor(CategoryModel: typeof Category);
    create(createCategoryDto: CreateCategoryDto): Promise<Category | "Category yaratilmadi">;
    findAll(): Promise<Category[] | "Categorylar topilmadi">;
    findOneCATEGORY(id: number): Promise<Category | "category topilmadi" | null>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category | "category topilmadi">;
    remove(id: number): Promise<"category topilmadi" | {
        message: string;
    }>;
}
