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
exports.SocialService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const social_model_1 = require("./model/social.model");
const category_model_1 = require("../categories/model/category.model");
const kurier_model_1 = require("../kurier/model/kurier.model");
let SocialService = class SocialService {
    SocialModel;
    constructor(SocialModel) {
        this.SocialModel = SocialModel;
    }
    async create(createSocialDto) {
        try {
            return await this.SocialModel.create(createSocialDto);
        }
        catch (error) {
            console.error(error);
            return 'social yaratilmadi';
        }
    }
    async findAll() {
        try {
            return await this.SocialModel.findAll({ include: [category_model_1.Category, kurier_model_1.Kurier] });
        }
        catch (error) {
            console.error(error);
            return 'sociallar topilmadi';
        }
    }
    async findOneSOCIAL(id) {
        try {
            return await this.SocialModel.findByPk(id);
        }
        catch (error) {
            console.error(error);
            return 'social topilmadi';
        }
    }
    async update(id, updateSocialDto) {
        try {
            const social = await this.SocialModel.findByPk(id);
            if (!social)
                return `social topilmadi`;
            return await social.update(updateSocialDto);
        }
        catch (error) {
            console.error(error);
            return 'social topilmadi';
        }
    }
    async remove(id) {
        try {
            const social = await this.SocialModel.findByPk(id);
            if (!social)
                return `social topilmadi`;
            await social.destroy();
            return { message: 'Deleted successfully' };
        }
        catch (error) {
            console.error(error);
            return 'social topilmadi';
        }
    }
};
exports.SocialService = SocialService;
exports.SocialService = SocialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(social_model_1.Social)),
    __metadata("design:paramtypes", [Object])
], SocialService);
//# sourceMappingURL=social.service.js.map