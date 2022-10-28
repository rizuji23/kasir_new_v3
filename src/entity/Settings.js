"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Settings = void 0;
var typeorm_1 = require("typeorm");
require("moment-timezone");
var moment_1 = require("moment");
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Settings.prototype.insertCreated = function () {
        this.created_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    Settings.prototype.insertUpdated = function () {
        this.updated_at = (0, moment_1["default"])().tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm:ss");
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Settings.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Settings.prototype, "id_settings");
    __decorate([
        (0, typeorm_1.Column)()
    ], Settings.prototype, "label_settings");
    __decorate([
        (0, typeorm_1.Column)()
    ], Settings.prototype, "url");
    __decorate([
        (0, typeorm_1.Column)()
    ], Settings.prototype, "content");
    __decorate([
        (0, typeorm_1.Column)()
    ], Settings.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Settings.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Settings.prototype, "insertCreated");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Settings.prototype, "insertUpdated");
    Settings = __decorate([
        (0, typeorm_1.Entity)()
    ], Settings);
    return Settings;
}());
exports.Settings = Settings;
