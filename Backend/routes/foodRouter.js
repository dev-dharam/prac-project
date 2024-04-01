import express from 'express';
import {getDataFromDB} from '../db/database.js';

const router1 = express.Router();

router1.get("/getdata", async (req, res) => {
    try {
        const {FoodItems, FoodCategory} = await getDataFromDB();
        res.send({FoodCategory, FoodItems})
    } catch (error) {
        console.error(`Error in Food Data Fetch:- ${error}`);
        res.status(404).json({
            success: false,
            message: "Data not fetched"
        })
    }
})

export default router1;
