"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const verifyToken_1 = require("../middlewares/verifyToken");
const userRoute = (0, express_1.Router)();
const u = new userController_1.default();
// userRoute.get('/getData', u.getData)
userRoute.post('/login', userController_1.default.prototype.login);
userRoute.post('/newUser', userController_1.default.prototype.newUser);
userRoute.get('/getProfile', verifyToken_1.verifyToken, userController_1.default.prototype.getProfile); //Solo puedes acceder si tienes un token verificado
exports.default = userRoute;
