"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const userRoute = (0, express_1.Router)();
const u = new userController_1.default();
userRoute.get('/getData', u.getData);
userRoute.post('/login', userController_1.default.prototype.login);
userRoute.post('newUser', userController_1.default.prototype.newUser);
exports.default = userRoute;
