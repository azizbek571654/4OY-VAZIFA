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
exports.CreateKurierDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateKurierDto {
    full_name;
    phone;
    email;
    status;
}
exports.CreateKurierDto = CreateKurierDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ali Valiyev', description: 'Kurьerning to‘liq ismi' }),
    (0, class_validator_1.IsString)({ message: 'Toliq ism satr bolishi kerak' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Toliq ism bosh bolmasligi kerak' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Toliq ism 100 belgidan oshmasligi kerak' }),
    __metadata("design:type", String)
], CreateKurierDto.prototype, "full_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+998901234567', description: 'Kurьer telefon raqami (+998 bilan boshlanishi shart)' }),
    (0, class_validator_1.IsString)({ message: 'Telefon raqam satr bolishi kerak' }),
    (0, class_validator_1.Matches)(/^\+998\d{9}$/, {
        message: 'Telefon raqam +998 bilan boshlanadigan 9 xonali bolishi kerak',
    }),
    __metadata("design:type", String)
], CreateKurierDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'kurier@example.com', description: 'Kurьerning email manzili' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email notogri formatda' }),
    __metadata("design:type", String)
], CreateKurierDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'active', description: 'Kurьer holati (masalan: active, pending)' }),
    (0, class_validator_1.IsString)({ message: 'Holat satr bolishi kerak' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Holat bosh bolmasligi kerak' }),
    __metadata("design:type", String)
], CreateKurierDto.prototype, "status", void 0);
//# sourceMappingURL=create-kurier.dto.js.map