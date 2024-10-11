import express from "express";
import cors from "cors"
import UseRoute from "./routes/UseRoute.js";

const app = express();

app.use(express.json())

app.use(cors())

// define a port 
const PORT = process.env.PORT ?? 3000;

app.use(UseRoute)

//runing server 

app.listen(PORT, ()=>{
    console.log("server runing at the port " + PORT)
})