"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Harga_Billing = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Harga_Billing = /** @class */ (function () {
    function Harga_Billing() {
    }
    Harga_Billing.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Harga_Billing.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Harga_Billing.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Harga_Billing.prototype, "id_harga_billing");
    __decorate([
        (0, typeorm_1.Column)()
    ], Harga_Billing.prototype, "harga");
    __decorate([
        (0, typeorm_1.Column)()
    ], Harga_Billing.prototype, "durasi");
    __decorate([
        (0, typeorm_1.Column)()
    ], Harga_Billing.prototype, "tipe_durasi");
    __decorate([
        (0, typeorm_1.Column)()
    ], Harga_Billing.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)()
    ], Harga_Billing.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Harga_Billing.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Harga_Billing.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Harga_Billing.prototype, "insertUpdated");
    Harga_Billing = __decorate([
        (0, typeorm_1.Entity)()
    ], Harga_Billing);
    return Harga_Billing;
}());
exports.Harga_Billing = Harga_Billing;
