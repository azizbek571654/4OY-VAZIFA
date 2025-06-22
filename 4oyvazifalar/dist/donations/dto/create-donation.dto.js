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
exports.CreateDonationDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateDonationDto {
    supporter_id;
    creator_id;
    amount;
    message;
    payment_method;
}
exports.CreateDonationDto = CreateDonationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'Supporter (yordamchi foydalanuvchi) ID raqami' }),
    (0, class_validator_1.IsInt)({ message: 'Supporter ID butun son bolishi kerak' }),
    (0, class_validator_1.IsPositive)({ message: 'Supporter ID musbat son bolishi kerak' }),
    __metadata("design:type", Number)
], CreateDonationDto.prototype, "supporter_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'Yaratgan (creator) foydalanuvchi ID raqami' }),
    (0, class_validator_1.IsInt)({ message: 'Creator ID butun son bolishi kerak' }),
    (0, class_validator_1.IsPositive)({ message: 'Creator ID musbat son bolishi kerak' }),
    __metadata("design:type", Number)
], CreateDonationDto.prototype, "creator_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10.50', description: 'Yuborilgan mablag miqdori (butun yoki 2 xonali kasr)' }),
    (0, class_validator_1.Matches)(/^\d+(\.\d{1,2})?$/, {
        message: 'Amount butun yoki 2 xonali kasr son bolishi kerak (masalan: 10 yoki 10.50)',
    }),
    __metadata("design:type", String)
], CreateDonationDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Omadingizni bersin!', description: 'Donatsiyaga yozilgan shaxsiy xabar' }),
    (0, class_validator_1.IsString)({ message: 'Xabar satr bolishi kerak' }),
    (0, class_validator_1.MaxLength)(300, { message: 'Xabar 300 belgidan oshmasligi kerak' }),
    __metadata("design:type", String)
], CreateDonationDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Click', description: 'Tolov usuli (masalan: Click, Payme)' }),
    (0, class_validator_1.IsString)({ message: 'Tolov turi satr bolishi kerak' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tolov turi bosh bolmasligi kerak' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Tolov turi 50 belgidan oshmasligi kerak' }),
    __metadata("design:type", String)
], CreateDonationDto.prototype, "payment_method", void 0);
//# sourceMappingURL=create-donation.dto.js.map