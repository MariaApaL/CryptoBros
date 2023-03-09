import { Server } from "./class/server";
import cors from "cors";
import bodyparser from "body-parser"
import userRoute from "./routes/user-route";
import mongoose from "mongoose";



let myServer = new Server();
 
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

myServer.app.use('/user', userRoute)

myServer.start(()=>{ 
    console.log("corriendo en el puerto rico "+ myServer.port );
});

// Conexion a MongoDb con mi usuario y contraseña
mongoose.connect('mongodb+srv://root:root@cryptobros.kkdzk90.mongodb.net/?retryWrites=true&w=majority',
// mongodb+srv://root:B8Z2TEvqtoFACg4P@approutes.yj6s2i4.mongodb.net/?retryWrites=true&w=majority
// {   useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex: true}
    (err)=>{
        if(err){
            console.log("error",err)
            throw err
        }else{
            console.log("Conectado a la bbdd con exito")
        }
    })


