import mongoose from "mongoose";


const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    concern: {
        type: String,
        required: true
    }
})

export const Data = mongoose.model("data", DataSchema)
