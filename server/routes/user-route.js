"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userRoute = (0, express_1.Router)();
userRoute.get('/getData', function (req, res) {
    console.log(req.query);
    res.send({
        hola: 'hola',
        adios: 'adios'
    });
});
exports["default"] = userRoute;
