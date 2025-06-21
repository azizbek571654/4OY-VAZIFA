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
exports.KurierService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const kurier_model_1 = require("./model/kurier.model");
let KurierService = class KurierService {
    KurierModel;
    constructor(KurierModel) {
        this.KurierModel = KurierModel;
    }
    async create(createKurierDto) {
        try {
            return await this.KurierModel.create(createKurierDto);
        }
        catch (error) {
            console.error(error);
            return 'kurier yaratilmadi';
        }
    }
    async findAll() {
        try {
            return await this.KurierModel.findAll();
        }
        catch (error) {
            console.error(error);
            return 'kurierlar topilmadi';
        }
    }
    async findOne(id) {
        try {
            return await this.KurierModel.findByPk(id);
        }
        catch (error) {
            console.error(error);
            return 'kurier topilmadi';
        }
    }
    async update(id, updateKurierDto) {
        try {
            const kurier = await this.KurierModel.findByPk(id);
            if (!kurier)
                return `kurier topilmadi`;
            return await kurier.update(updateKurierDto);
        }
        catch (error) {
            console.error(error);
            return 'kurier topilmadi';
        }
    }
    async remove(id) {
        try {
            const kurier = await this.KurierModel.findByPk(id);
            if (!kurier)
                return `kurier topilmadi`;
            await kurier.destroy();
            return { message: 'Deleted successfully' };
        }
        catch (error) {
            console.error(error);
            return 'kurier topilmadi';
        }
    }
};
exports.KurierService = KurierService;
exports.KurierService = KurierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(kurier_model_1.Kurier)),
    __metadata("design:paramtypes", [Object])
], KurierService);
//# sourceMappingURL=kurier.service.js.map