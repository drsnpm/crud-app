import express from "express";
import mongoose, { Mongoose } from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT ||  7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{

    console.log("DB connect succuessfully");
    
    app.listen(PORT, ()=>{
        console.log(`server is running port: ${PORT}`);
    })

}).catch(error => console.log(error));


app.use("/api", route)