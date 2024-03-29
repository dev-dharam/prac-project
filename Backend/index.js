import express from 'express';
import { DBConnect } from './db/database.js';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

const app = express();

app.get("/", function(req,res){
    res.send("india");
})

DBConnect();

app.listen(5000, function(req,res){
    console.log(`Server Running On 5000`);
})
