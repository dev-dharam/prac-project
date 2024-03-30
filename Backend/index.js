import express from 'express';
import { DBConnect } from './db/database.js';
import dotenv from 'dotenv';
import router from './routes/userrouter.js';

dotenv.config({path: '.env'});

const app = express();

app.get("/", function(req,res){
    res.send("india");
})

app.use(express.json());

// Middleware
app.use("/api/v1", router);


DBConnect();

app.listen(5000, function(req,res){
    console.log(`Server Running On 5000`);
})
