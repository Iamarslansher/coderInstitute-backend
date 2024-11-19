import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
