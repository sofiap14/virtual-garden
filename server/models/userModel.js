import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
      auth0Id: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      profilePicture: {
        type: String,
      }
}, {timestamps: true})

const User = mongoose.model('Users', userSchema);

export default User;