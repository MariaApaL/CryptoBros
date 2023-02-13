"use strict";
exports.__esModule = true;
exports.Server = void 0;
var express_1 = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.port = 3300;
        this.app = (0, express_1["default"])();
    }
    Server.prototype.start = function (funcion) {
        this.app.listen(this.port, funcion);
    };
    return Server;
}());
exports.Server = Server;
