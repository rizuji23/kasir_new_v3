"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Stok_Barang = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Stok_Barang = /** @class */ (function () {
    function Stok_Barang() {
    }
    Stok_Barang.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Stok_Barang.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Stok_Barang.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "id_stok_barang");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "id_menu");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "stok_awal");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "id_cart");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "terjual");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "sisa");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "shift");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "stok_akhir");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "user_in");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Stok_Barang.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Stok_Barang.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Stok_Barang.prototype, "insertUpdated");
    Stok_Barang = __decorate([
        (0, typeorm_1.Entity)()
    ], Stok_Barang);
    return Stok_Barang;
}());
exports.Stok_Barang = Stok_Barang;
