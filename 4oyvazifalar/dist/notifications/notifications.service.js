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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const notification_model_1 = require("./model/notification.model");
let NotificationsService = class NotificationsService {
    notificationModel;
    constructor(notificationModel) {
        this.notificationModel = notificationModel;
    }
    async create(createNotificationDto) {
        try {
            return await this.notificationModel.create(createNotificationDto);
        }
        catch (error) {
            console.error(error);
            return 'Notification yaratilmadi';
        }
    }
    async findAll() {
        try {
            return await this.notificationModel.findAll();
        }
        catch (error) {
            console.error(error);
            return 'Notificationlar topilmadi';
        }
    }
    async findOne(id) {
        try {
            return await this.notificationModel.findByPk(id);
        }
        catch (error) {
            console.error(error);
            return 'Notification topilmadi';
        }
    }
    async update(id, updateNotificationDto) {
        try {
            const Notification = await this.notificationModel.findByPk(id);
            if (!Notification)
                return `Notification topilmadi`;
            return await Notification.update(updateNotificationDto);
        }
        catch (error) {
            console.error(error);
            return 'Notification topilmadi';
        }
    }
    async remove(id) {
        try {
            const Notification = await this.notificationModel.findByPk(id);
            if (!Notification)
                return `Notification topilmadi`;
            await Notification.destroy();
            return { message: 'Deleted successfully' };
        }
        catch (error) {
            console.error(error);
            return 'Notification topilmadi';
        }
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(notification_model_1.Notification)),
    __metadata("design:paramtypes", [Object])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map