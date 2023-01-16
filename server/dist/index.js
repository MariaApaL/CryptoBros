"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./class/server");
let myServer = new server_1.Server();
myServer.start(() => {
    console.log("corriendo en el puerto " + myServer.port);
});
