import { Server } from "./class/server";
import cors from "cors";
import bodyparser from "body-parser"
import usuarioRuta from "./routes/usuario-route";


let myServer =new Server();

myServer.start(()=>{ 
    console.log("corriendo en el puerto "+ myServer.port );
});

myServer.app.use(cors({
    credentials:true,
    origin:true
})
)

myServer.app.use(bodyparser.json({
    limit:"5mb"
}))

myServer.app.use(bodyparser.urlencoded({
    extended:true,
    limit:"5mb"
}))

myServer.app.use('/usuario', usuarioRuta)
