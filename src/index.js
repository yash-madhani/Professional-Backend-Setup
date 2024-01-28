// require('dotenv').config({path: './env'})
import dotenv from "dotenv";

import mongoose from "mongoose";

import connectDB from "./db/index.js";



dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    // app.on("error", (error) => {
    //     console.log("ERROR: ", error)
    //     throw error
    // })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`The server is running at PORT : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed ", err);
})












/*
import express from "express";
import { error } from "console";
const app = express()

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App listening on PORT ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()

*/