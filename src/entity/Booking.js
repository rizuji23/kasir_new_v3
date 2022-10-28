"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Booking = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Booking = /** @class */ (function () {
    function Booking() {
    }
    Booking.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Booking.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Booking.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "id_booking");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "id_member");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "nama_booking");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "id_table");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "durasi_booking");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "total_harga");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "uang_cash");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "tipe_booking");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "status_booking");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "user_in");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Booking.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Booking.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Booking.prototype, "insertUpdated");
    Booking = __decorate([
        (0, typeorm_1.Entity)()
    ], Booking);
    return Booking;
}());
exports.Booking = Booking;
