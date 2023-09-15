import mongoose from "mongoose";
const Schema = mongoose.Schema;

const gardenSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Garden = mongoose.model('Garden', gardenSchema);

export default Garden;