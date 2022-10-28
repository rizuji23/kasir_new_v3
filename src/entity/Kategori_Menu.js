"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Kategori_Menu = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Kategori_Menu = /** @class */ (function () {
    function Kategori_Menu() {
    }
    Kategori_Menu.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Kategori_Menu.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Kategori_Menu.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Kategori_Menu.prototype, "id_kategori_menu");
    __decorate([
        (0, typeorm_1.Column)()
    ], Kategori_Menu.prototype, "nama_kategori");
    __decorate([
        (0, typeorm_1.Column)()
    ], Kategori_Menu.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Kategori_Menu.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Kategori_Menu.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Kategori_Menu.prototype, "insertUpdated");
    Kategori_Menu = __decorate([
        (0, typeorm_1.Entity)()
    ], Kategori_Menu);
    return Kategori_Menu;
}());
exports.Kategori_Menu = Kategori_Menu;
