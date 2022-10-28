"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User_Kasir = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var User_Kasir = /** @class */ (function () {
    function User_Kasir() {
    }
    User_Kasir.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    User_Kasir.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User_Kasir.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], User_Kasir.prototype, "id_user");
    __decorate([
        (0, typeorm_1.Column)()
    ], User_Kasir.prototype, "nama");
    __decorate([
        (0, typeorm_1.Column)()
    ], User_Kasir.prototype, "username");
    __decorate([
        (0, typeorm_1.Column)()
    ], User_Kasir.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)()
    ], User_Kasir.prototype, "jabatan");
    __decorate([
        (0, typeorm_1.Column)()
    ], User_Kasir.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], User_Kasir.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], User_Kasir.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], User_Kasir.prototype, "insertUpdated");
    User_Kasir = __decorate([
        (0, typeorm_1.Entity)()
    ], User_Kasir);
    return User_Kasir;
}());
exports.User_Kasir = User_Kasir;
