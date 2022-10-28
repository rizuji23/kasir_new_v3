"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Pesanan = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Pesanan = /** @class */ (function () {
    function Pesanan() {
    }
    Pesanan.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Pesanan.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Pesanan.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pesanan.prototype, "id_pesanan");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pesanan.prototype, "id_cart");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pesanan.prototype, "total");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pesanan.prototype, "uang_cash");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pesanan.prototype, "uang_kembalian");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pesanan.prototype, "id_booking");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pesanan.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pesanan.prototype, "user_in");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pesanan.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pesanan.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Pesanan.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Pesanan.prototype, "insertUpdated");
    Pesanan = __decorate([
        (0, typeorm_1.Entity)()
    ], Pesanan);
    return Pesanan;
}());
exports.Pesanan = Pesanan;
