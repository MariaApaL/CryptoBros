"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user-controller"));
const userRoute = (0, express_1.Router)();
// userRoute.get("/login",(req: Request,res: Response)=>{
//     console.log(req.query);
//     res.send({
//         status:200,
//         message:"Todo guay"
//     })
// })
userRoute.get("/getDatos", user_controller_1.default.prototype.getDatos);
userRoute.post("/login", user_controller_1.default.prototype.login);
exports.default = userRoute;
