import { Server } from "./class/server";
import cors from "cors";
import bodyparser from "body-parser"
import userRoute from "./routes/user-route";


let myServer =new Server();

myServer.app.use(bodyparser.json({
    limit:"5mb"
}))

myServer.app.use(bodyparser.urlencoded({
    extended:true,
    limit:"5mb"
}))

myServer.app.use(cors({
    credentials:true,
    origin:true
})
)

myServer.start(()=>{ 
    console.log("corriendo en el puerto rico "+ myServer.port );
});

myServer.app.use('/usuario', userRoute)
