"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Table_Billiard = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Table_Billiard = /** @class */ (function () {
    function Table_Billiard() {
    }
    Table_Billiard.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Table_Billiard.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Table_Billiard.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Table_Billiard.prototype, "id_table");
    __decorate([
        (0, typeorm_1.Column)()
    ], Table_Billiard.prototype, "id_booking");
    __decorate([
        (0, typeorm_1.Column)()
    ], Table_Billiard.prototype, "nama_table");
    __decorate([
        (0, typeorm_1.Column)()
    ], Table_Billiard.prototype, "durasi");
    __decorate([
        (0, typeorm_1.Column)()
    ], Table_Billiard.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)()
    ], Table_Billiard.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Table_Billiard.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Table_Billiard.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Table_Billiard.prototype, "insertUpdated");
    Table_Billiard = __decorate([
        (0, typeorm_1.Entity)()
    ], Table_Billiard);
    return Table_Billiard;
}());
exports.Table_Billiard = Table_Billiard;
