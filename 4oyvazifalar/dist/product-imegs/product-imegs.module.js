"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImegsModule = void 0;
const common_1 = require("@nestjs/common");
const product_imegs_service_1 = require("./product-imegs.service");
const product_imegs_controller_1 = require("./product-imegs.controller");
const product_model_1 = require("../product/model/product.model");
const sequelize_1 = require("@nestjs/sequelize");
const product_imeg_model_1 = require("./model/product-imeg.model");
const product_module_1 = require("../product/product.module");
let ProductImegsModule = class ProductImegsModule {
};
exports.ProductImegsModule = ProductImegsModule;
exports.ProductImegsModule = ProductImegsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([product_model_1.Product, product_imeg_model_1.ProductImeg]), product_module_1.ProductModule],
        controllers: [product_imegs_controller_1.ProductImegsController],
        providers: [product_imegs_service_1.ProductImegsService],
        exports: [product_imegs_service_1.ProductImegsService],
    })
], ProductImegsModule);
//# sourceMappingURL=product-imegs.module.js.map