"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoute = (0, express_1.Router)();
userRoute.get('/getData', (req, res) => {
    console.log(req.query);
    res.send({
        hola: 'hola',
        adios: 'adios'
    });
});
exports.default = userRoute;
