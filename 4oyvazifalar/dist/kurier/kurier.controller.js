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
exports.KurierController = void 0;
const common_1 = require("@nestjs/common");
const kurier_service_1 = require("./kurier.service");
const create_kurier_dto_1 = require("./dto/create-kurier.dto");
const update_kurier_dto_1 = require("./dto/update-kurier.dto");
let KurierController = class KurierController {
    kurierService;
    constructor(kurierService) {
        this.kurierService = kurierService;
    }
    create(createKurierDto) {
        return this.kurierService.create(createKurierDto);
    }
    findAll() {
        return this.kurierService.findAll();
    }
    findOne(id) {
        return this.kurierService.findOne(+id);
    }
    update(id, updateKurierDto) {
        return this.kurierService.update(+id, updateKurierDto);
    }
    remove(id) {
        return this.kurierService.remove(+id);
    }
};
exports.KurierController = KurierController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kurier_dto_1.CreateKurierDto]),
    __metadata("design:returntype", void 0)
], KurierController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KurierController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KurierController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_kurier_dto_1.UpdateKurierDto]),
    __metadata("design:returntype", void 0)
], KurierController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KurierController.prototype, "remove", null);
exports.KurierController = KurierController = __decorate([
    (0, common_1.Controller)('kurier'),
    __metadata("design:paramtypes", [kurier_service_1.KurierService])
], KurierController);
//# sourceMappingURL=kurier.controller.js.map