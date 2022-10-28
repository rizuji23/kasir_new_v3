"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Menu = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Menu.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Menu.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Menu.prototype, "id_menu");
    __decorate([
        (0, typeorm_1.Column)()
    ], Menu.prototype, "nama_menu");
    __decorate([
        (0, typeorm_1.Column)()
    ], Menu.prototype, "harga_menu");
    __decorate([
        (0, typeorm_1.Column)()
    ], Menu.prototype, "kategori_menu");
    __decorate([
        (0, typeorm_1.Column)()
    ], Menu.prototype, "img_file");
    __decorate([
        (0, typeorm_1.Column)()
    ], Menu.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Menu.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Menu.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Menu.prototype, "insertUpdated");
    Menu = __decorate([
        (0, typeorm_1.Entity)()
    ], Menu);
    return Menu;
}());
exports.Menu = Menu;
