import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Users', userSchema)