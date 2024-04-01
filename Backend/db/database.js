import mongoose from "mongoose";

// const DBSTRING = process.env.MONGO_URI;
// console.log(DBSTRING)

export const DBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
    } catch (error) {
        console.error(`Error In DB ${error}`);
    }
}

export const getDataFromDB = async () => {
    const resItems = await mongoose.connection.db.collection("Data");
    const FoodItems = await resItems.find({}).toArray();

    const resCategory = await mongoose.connection.db.collection("category");
    const FoodCategory = await resCategory.find({}).toArray();

    return {FoodItems, FoodCategory};
}