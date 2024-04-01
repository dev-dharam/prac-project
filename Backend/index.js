import express from 'express';
import { DBConnect } from './db/database.js';
import dotenv from 'dotenv';
import router from './routes/userrouter.js';
import cors from 'cors';
import router1 from './routes/foodRouter.js'

dotenv.config({path: '.env'});

const app = express();

app.get("/", function(req,res){
    res.send("india");
})

app.use(cors())
app.use(express.json());

// Middleware
app.use("/api/v1", router);
app.use("/api/v1", router1)


DBConnect();

app.listen(5000, function(req,res){
    console.log(`Server Running On 5000`);
})
