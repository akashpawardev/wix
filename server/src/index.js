import express from "express";
import { mongoConnect } from "../db/db.js"
import { Data } from "../model/data.js";
import cors from "cors";

mongoConnect();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "Server Heath Check!"
    })
});

app.post("/bookappointment", async (req, res) => {
    try {
        const { name, email, phone, concern } = req.body;

        await Data.create({
            name,
            email,
            phone,
            concern
        });
        res.json({
            message: "Appointment is Book"
        })
    } catch (error) {
        console.log("Appointment is not Book!");
        res.json({
            message: error
        })
    }
});

app.listen(4000);