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
exports.Roles = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const admin_model_1 = require("../../admin/model/admin.model");
const user_role_model_1 = require("../../admin/model/user-role.model");
let Roles = class Roles extends sequelize_typescript_1.Model {
    value;
    destcription;
    users;
};
exports.Roles = Roles;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Roles.prototype, "value", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Roles.prototype, "destcription", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => admin_model_1.Admin, () => user_role_model_1.UserRole),
    __metadata("design:type", Array)
], Roles.prototype, "users", void 0);
exports.Roles = Roles = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'roless' })
], Roles);
//# sourceMappingURL=role.model.js.map