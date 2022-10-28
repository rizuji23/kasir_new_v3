"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Detail_Cafe = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Detail_Cafe = /** @class */ (function () {
    function Detail_Cafe() {
    }
    Detail_Cafe.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Detail_Cafe.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Detail_Cafe.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Cafe.prototype, "id_detail_cafe");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Cafe.prototype, "id_menu");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Cafe.prototype, "harga_jual");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Cafe.prototype, "modal");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Cafe.prototype, "keuntungan");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Cafe.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Cafe.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Detail_Cafe.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Detail_Cafe.prototype, "insertUpdated");
    Detail_Cafe = __decorate([
        (0, typeorm_1.Entity)()
    ], Detail_Cafe);
    return Detail_Cafe;
}());
exports.Detail_Cafe = Detail_Cafe;
