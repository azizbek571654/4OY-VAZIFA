"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const category_model_1 = require("./model/category.model");
let CategoriesService = class CategoriesService {
    CategoryModel;
    constructor(CategoryModel) {
        this.CategoryModel = CategoryModel;
    }
    async create(createCategoryDto) {
        try {
            return await this.CategoryModel.create(createCategoryDto);
        }
        catch (error) {
            console.error(error);
            return 'Category yaratilmadi';
        }
    }
    async findAll() {
        try {
            return await this.CategoryModel.findAll();
        }
        catch (error) {
            console.error(error);
            return 'Categorylar topilmadi';
        }
    }
    async findOneCATEGORY(id) {
        try {
            return await this.CategoryModel.findByPk(id);
        }
        catch (error) {
            console.error(error);
            return 'category topilmadi';
        }
    }
    async update(id, updateCategoryDto) {
        try {
            const category = await this.CategoryModel.findByPk(id);
            if (!category)
                return `category topilmadi`;
            return await category.update(updateCategoryDto);
        }
        catch (error) {
            console.error(error);
            return 'category topilmadi';
        }
    }
    async remove(id) {
        try {
            const category = await this.CategoryModel.findByPk(id);
            if (!category)
                return `category topilmadi`;
            await category.destroy();
            return { message: 'Deleted successfully' };
        }
        catch (error) {
            console.error(error);
            return 'category topilmadi';
        }
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(category_model_1.Category)),
    __metadata("design:paramtypes", [Object])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map