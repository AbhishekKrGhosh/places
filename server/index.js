import express  from "express";
import mongoose from "mongoose";
import cors from 'cors'
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import router from "./routes/posts.js";

const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: "true"}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: "true"}))
app.use(cors( ))
dotenv.config()

const username = process.env.UNAME
const password = process.env.PASSWORD
const PORT = process.env.PORT || 5000

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.tiw7h5c.mongodb.net/`)
.then(()=>{
    
    app.listen(PORT,()=>{
        console.log(`server connected at Port : ${PORT}`)
    })
})
.catch((error)=>{console.log(error.message)})
app.use('/posts', router)


