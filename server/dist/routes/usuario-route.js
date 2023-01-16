"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioRuta = (0, express_1.Router)();
usuarioRuta.get("/login", (req, res) => {
    console.log(req.query);
    res.send({
        status: 200,
        message: "Todo guay"
    });
});
exports.default = usuarioRuta;
