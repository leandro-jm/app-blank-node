"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsoa_1 = require("tsoa");
var HelloController = /** @class */ (function () {
    function HelloController() {
    }
    HelloController.prototype.home = function () {
        return {
            message: "App template Node, Express, TypeScript, DotEnv COnfig, API and Swagger",
        };
    };
    __decorate([
        (0, tsoa_1.Get)("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], HelloController.prototype, "home", null);
    HelloController = __decorate([
        (0, tsoa_1.Route)("hello")
    ], HelloController);
    return HelloController;
}());
exports.default = HelloController;
