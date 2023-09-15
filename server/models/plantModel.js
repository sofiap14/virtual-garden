import mongoose from "mongoose";
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    plantname: {
        type: String,
        required: true
    },
    scientificname: {
        type: String
    },
    plantingDate: {
        type: Date,
    }
}, {timestamps: true})

const Plant = mongoose.Schema('Plant', plantSchema)

export default Plant;