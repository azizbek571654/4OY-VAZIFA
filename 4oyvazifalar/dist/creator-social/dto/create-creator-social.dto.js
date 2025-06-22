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
exports.CreateCreatorSocialDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateCreatorSocialDto {
    creator_id;
    social_id;
    url;
}
exports.CreateCreatorSocialDto = CreateCreatorSocialDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Creatorning ID raqami' }),
    (0, class_validator_1.IsInt)({ message: 'Creator ID butun son bolishi kerak' }),
    (0, class_validator_1.IsPositive)({ message: 'Creator ID musbat son bolishi kerak' }),
    __metadata("design:type", Number)
], CreateCreatorSocialDto.prototype, "creator_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Social media platformasi ID raqami' }),
    (0, class_validator_1.IsInt)({ message: 'Social ID butun son bolishi kerak' }),
    (0, class_validator_1.IsPositive)({ message: 'Social ID musbat son bolishi kerak' }),
    __metadata("design:type", Number)
], CreateCreatorSocialDto.prototype, "social_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://instagram.com/example', description: 'Social URL manzili' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'URL bosh bolmasligi kerak' }),
    __metadata("design:type", String)
], CreateCreatorSocialDto.prototype, "url", void 0);
//# sourceMappingURL=create-creator-social.dto.js.map