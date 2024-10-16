import app from "./src/app"
import { envConfig } from "./src/config/config"
import connectionToDb from "./src/config/db"
import {Server} from "socket.io"

 function startServer(){
     connectionToDb()
    const port = envConfig.port || 4000
   const server = app.listen(port,()=>{
        console.log(`Server has statrted at port[${port}]`)


// post - data receive grdaaa -on
//get  - data  paudaaa - emit
//request - socket
//api -- event
//req.body=data

    })
    const io = new Server(server)
    io.on("connection",(socket)=>{
        socket.on("haha",(data)=>{
            console.log(data) 
            socket.emit("abhesh",{
                message: "Data receive vayo hai tw"
            })
        })
        console.log(socket)
        
        console.log("Someone Connected (Customer)")
    })
}     

startServer()                            