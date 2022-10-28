"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Waiting_List = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Waiting_List = /** @class */ (function () {
    function Waiting_List() {
    }
    Waiting_List.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Waiting_List.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Waiting_List.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Waiting_List.prototype, "id_waiting");
    __decorate([
        (0, typeorm_1.Column)()
    ], Waiting_List.prototype, "nama_waiting");
    __decorate([
        (0, typeorm_1.Column)()
    ], Waiting_List.prototype, "table_waiting");
    __decorate([
        (0, typeorm_1.Column)()
    ], Waiting_List.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Waiting_List.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Waiting_List.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Waiting_List.prototype, "insertUpdated");
    Waiting_List = __decorate([
        (0, typeorm_1.Entity)()
    ], Waiting_List);
    return Waiting_List;
}());
exports.Waiting_List = Waiting_List;
