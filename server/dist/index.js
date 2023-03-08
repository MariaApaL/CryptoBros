"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./class/server");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_route_1 = __importDefault(require("./routes/user-route"));
const mongoose_1 = __importDefault(require("mongoose"));
let myServer = new server_1.Server();
myServer.app.use(body_parser_1.default.json({
    limit: "5mb"
}));
myServer.app.use(body_parser_1.default.urlencoded({
    extended: true,
    limit: "5mb"
}));
myServer.app.use((0, cors_1.default)({
    credentials: true,
    origin: true
}));
myServer.app.use('/user', user_route_1.default);
myServer.start(() => {
    console.log("corriendo en el puerto rico " + myServer.port);
});
// Conexion a MongoDb con mi usuario y contraseña
mongoose_1.default.connect('mongodb+srv://root:B8Z2TEvqtoFACg4P@approutes.yj6s2i4.mongodb.net/?retryWrites=true&w=majority', 
// {   useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex: true}
(err) => {
    if (err) {
        console.log("error", err);
        throw err;
    }
    else {
        console.log("Conectado a la bbdd con exito");
    }
});
