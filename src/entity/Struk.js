"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Struk = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Struk = /** @class */ (function () {
    function Struk() {
    }
    Struk.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Struk.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Struk.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Struk.prototype, "id_struk");
    __decorate([
        (0, typeorm_1.Column)()
    ], Struk.prototype, "id_pesanan");
    __decorate([
        (0, typeorm_1.Column)()
    ], Struk.prototype, "nama_customer");
    __decorate([
        (0, typeorm_1.Column)()
    ], Struk.prototype, "total_struk");
    __decorate([
        (0, typeorm_1.Column)()
    ], Struk.prototype, "cash_struk");
    __decorate([
        (0, typeorm_1.Column)()
    ], Struk.prototype, "kembalian_struk");
    __decorate([
        (0, typeorm_1.Column)()
    ], Struk.prototype, "status_struk");
    __decorate([
        (0, typeorm_1.Column)()
    ], Struk.prototype, "user_in");
    __decorate([
        (0, typeorm_1.Column)()
    ], Struk.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Struk.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Struk.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Struk.prototype, "insertUpdated");
    Struk = __decorate([
        (0, typeorm_1.Entity)()
    ], Struk);
    return Struk;
}());
exports.Struk = Struk;
