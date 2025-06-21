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
exports.DonationsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const donation_model_1 = require("./model/donation.model");
let DonationsService = class DonationsService {
    donationModel;
    constructor(donationModel) {
        this.donationModel = donationModel;
    }
    async create(createDonationDto) {
        try {
            return await this.donationModel.create(createDonationDto);
        }
        catch (error) {
            console.error(error);
            return 'donation yaratilmadi';
        }
    }
    async findAll() {
        try {
            return await this.donationModel.findAll();
        }
        catch (error) {
            console.error(error);
            return 'donationlar topilmadi';
        }
    }
    async findOne(id) {
        try {
            return await this.donationModel.findByPk(id);
        }
        catch (error) {
            console.error(error);
            return 'donation topilmadi';
        }
    }
    async update(id, updateDonationDto) {
        try {
            const donation = await this.donationModel.findByPk(id);
            if (!donation)
                return `donation topilmadi`;
            return await donation.update(updateDonationDto);
        }
        catch (error) {
            console.error(error);
            return 'donation topilmadi';
        }
    }
    async remove(id) {
        try {
            const donation = await this.donationModel.findByPk(id);
            if (!donation)
                return `donation topilmadi`;
            await donation.destroy();
            return { message: 'Deleted successfully' };
        }
        catch (error) {
            console.error(error);
            return 'donation topilmadi';
        }
    }
};
exports.DonationsService = DonationsService;
exports.DonationsService = DonationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(donation_model_1.Donation)),
    __metadata("design:paramtypes", [Object])
], DonationsService);
//# sourceMappingURL=donations.service.js.map