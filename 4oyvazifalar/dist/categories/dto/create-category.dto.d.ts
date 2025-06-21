import { Category } from '../model/category.model';
export declare class CreateCategoryDto implements Partial<Category> {
    name: string;
    description: string;
}
