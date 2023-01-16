import { Server } from "./class/server";

let myServer =new Server();

myServer.start(()=>{ 
    console.log("corriendo en el puerto "+ myServer.port );
})
