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
exports.Notification = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const admin_model_1 = require("../../admin/model/admin.model");
let Notification = class Notification extends sequelize_typescript_1.Model {
    user_id;
    admin;
    message;
};
exports.Notification = Notification;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => admin_model_1.Admin),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", Number)
], Notification.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => admin_model_1.Admin, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", admin_model_1.Admin)
], Notification.prototype, "admin", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
exports.Notification = Notification = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Notifications' })
], Notification);
//# sourceMappingURL=notification.model.js.map