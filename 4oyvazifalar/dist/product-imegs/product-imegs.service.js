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
exports.ProductImegsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const product_imeg_model_1 = require("./model/product-imeg.model");
const product_service_1 = require("../product/product.service");
let ProductImegsService = class ProductImegsService {
    productImegsModel;
    productservise;
    constructor(productImegsModel, productservise) {
        this.productImegsModel = productImegsModel;
        this.productservise = productservise;
    }
    async create(createProductImegDto) {
        try {
            const product = await this.productservise.findOnePRODUCT(createProductImegDto.product_id);
            if (!product) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'product topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            const newProduct = await this.productImegsModel.create(createProductImegDto);
            return {
                success: true,
                message: 'Product-IMG yaratildi',
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
                message: 'Product-IMG yaratilmadi',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const productsIMG = await this.productImegsModel.findAll();
            return {
                success: true,
                message: 'Barcha productImegs',
                count: productsIMG.length,
                data: productsIMG,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: 'productImegs topilmadi',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOneProductIMG(id) {
        try {
            const product = await this.productImegsModel.findByPk(id);
            if (!product) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'productIMG topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            return {
                success: true,
                message: 'productIMG topildi',
                data: product,
            };
        }
        catch (error) {
            console.error(error);
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'productIMG ni olishda xatolik',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateProductImegDto) {
        try {
            const productIMG = await this.productImegsModel.findByPk(id);
            if (!productIMG) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'productIMG topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            const updated = await productIMG.update(updateProductImegDto);
            return {
                success: true,
                message: 'productIMG yangilandi',
                data: updated,
            };
        }
        catch (error) {
            console.error(error);
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'productIMG yangilanmadi',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            const product = await this.productImegsModel.findByPk(id);
            if (!product) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'product IMEGS topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            await product.destroy();
            return {
                success: true,
                message: 'product IMEGS ochirildi',
            };
        }
        catch (error) {
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'product IMEGSni ochirishda xatolik',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ProductImegsService = ProductImegsService;
exports.ProductImegsService = ProductImegsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(product_imeg_model_1.ProductImeg)),
    __metadata("design:paramtypes", [Object, product_service_1.ProductService])
], ProductImegsService);
//# sourceMappingURL=product-imegs.service.js.map