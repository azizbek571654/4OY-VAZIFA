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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateProductDto {
    creator_id;
    name;
    description;
    product_images;
    in_stock;
    is_available;
    price;
    category_id;
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Mahsulot yaratuvchisining ID raqami' }),
    (0, class_validator_1.IsInt)({ message: 'Creator ID butun son bolishi kerak' }),
    (0, class_validator_1.IsPositive)({ message: 'Creator ID musbat son bolishi kerak' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "creator_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nike Air Max', description: 'Mahsulot nomi' }),
    (0, class_validator_1.IsString)({ message: 'Mahsulot nomi satr bolishi kerak' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Mahsulot nomi bosh bolmasligi kerak' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Mahsulot nomi 100 belgidan oshmasligi kerak' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Yengil va qulay sport oyoq kiyim', description: 'Mahsulot tavsifi' }),
    (0, class_validator_1.IsString)({ message: 'Tavsif satr bolishi kerak' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255, { message: 'Tavsif 255 belgidan oshmasligi kerak' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'Mahsulotga tegishli rasmlar soni' }),
    (0, class_validator_1.IsInt)({ message: 'Rasm soni butun son bolishi kerak' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0, { message: 'Rasm soni 0 yoki undan katta bolishi kerak' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "product_images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 15, description: 'Ombordagi mavjud soni' }),
    (0, class_validator_1.IsInt)({ message: 'Ombordagi soni butun son bolishi kerak' }),
    (0, class_validator_1.Min)(0, { message: 'Ombordagi soni 0 yoki undan katta bolishi kerak' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "in_stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Mahsulot mavjudmi yoki yoq' }),
    (0, class_validator_1.IsBoolean)({ message: 'Mavjudlik true yoki false bolishi kerak' }),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "is_available", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 249.99, description: 'Mahsulot narxi' }),
    (0, class_validator_1.IsPositive)({ message: 'Narx musbat son bolishi kerak' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'Kategoriya ID raqami' }),
    (0, class_validator_1.IsInt)({ message: 'Category ID butun son bolishi kerak' }),
    (0, class_validator_1.IsPositive)({ message: 'Category ID musbat son bolishi kerak' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "category_id", void 0);
//# sourceMappingURL=create-product.dto.js.map