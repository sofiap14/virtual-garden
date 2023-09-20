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
        default: Date.now
    }
}, {timestamps: true})

const Plant = mongoose.model('Plant', plantSchema)

export default Plant;