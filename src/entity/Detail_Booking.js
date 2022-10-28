"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Detail_Booking = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Detail_Booking = /** @class */ (function () {
    function Detail_Booking() {
    }
    Detail_Booking.prototype.insertCreated = function () {
        this.start_duration = (0, moment_1["default"])().tz("Asia/Jakarta").format("HH:mm:ss");
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Detail_Booking.prototype.insertUpdated = function () {
        this.end_duration = (0, moment_1["default"])().tz("Asia/Jakarta").format("HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Detail_Booking.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Booking.prototype, "id_detail_booking");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Booking.prototype, "id_booking");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Booking.prototype, "harga");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Booking.prototype, "durasi");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Booking.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Booking.prototype, "start_duration");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Booking.prototype, "end_duration");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Booking.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Detail_Booking.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Detail_Booking.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Detail_Booking.prototype, "insertUpdated");
    Detail_Booking = __decorate([
        (0, typeorm_1.Entity)()
    ], Detail_Booking);
    return Detail_Booking;
}());
exports.Detail_Booking = Detail_Booking;
