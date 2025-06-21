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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const product_model_1 = require("./model/product.model");
const admin_service_1 = require("../admin/admin.service");
const categories_service_1 = require("../categories/categories.service");
let ProductService = class ProductService {
    productModel;
    adminService;
    CategoryService;
    constructor(productModel, adminService, CategoryService) {
        this.productModel = productModel;
        this.adminService = adminService;
        this.CategoryService = CategoryService;
    }
    async create(createProductDto) {
        try {
            const creator = await this.adminService.findOneADMIN(createProductDto.creator_id);
            if (!creator) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'creator topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            const category = await this.CategoryService.findOneCATEGORY(createProductDto.category_id);
            if (!category) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'category topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            const newProduct = await this.productModel.create(createProductDto);
            return {
                success: true,
                message: 'Product yaratildi',
                data: newProduct,
            };
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException({
                success: false,
                message: 'Product yaratilmadi',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const products = await this.productModel.findAll();
            return {
                success: true,
                message: 'Barcha Productlar',
                count: products.length,
                data: products,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: 'Productlar topilmadi',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOnePRODUCT(id) {
        try {
            const product = await this.productModel.findByPk(id);
            if (!product) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'product topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            return {
                success: true,
                message: 'product topildi',
                data: product,
            };
        }
        catch (error) {
            console.error(error);
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'productni olishda xatolik',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateProductDto) {
        try {
            const product = await this.productModel.findByPk(id);
            if (!product) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'product topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            const updated = await product.update(updateProductDto);
            return {
                success: true,
                message: 'product yangilandi',
                data: updated,
            };
        }
        catch (error) {
            console.error(error);
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'product yangilanmadi',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            const product = await this.productModel.findByPk(id);
            if (!product) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'product topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            await product.destroy();
            return {
                success: true,
                message: 'product ochirildi',
            };
        }
        catch (error) {
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'productni ochirishda xatolik',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(product_model_1.Product)),
    __metadata("design:paramtypes", [Object, admin_service_1.AdminService,
        categories_service_1.CategoriesService])
], ProductService);
//# sourceMappingURL=product.service.js.map