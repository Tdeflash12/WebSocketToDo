import app from "./src/app"
import { envConfig } from "./src/config/config"
import connectionToDb from "./src/config/db"


 function startServer(){
     connectionToDb()
    const port = envConfig.port || 4000
    app.listen(port,()=>{
        console.log(`Server has statrted at port[${port}]`)




    })
}     
startServer()                            