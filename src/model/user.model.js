import { Schema, model } from "mongoose";

const UserSchema = Schema({
  fullName: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    immutable: true,
    validator:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: "Please add a valid email string to the email path.",
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  referralCode: {
    type: String,
    required: false,
  },
  googleId: {
    type: String,
  },
  googleDisplayName: {
    type: String,
  },
  googleEmail: {
    type: String,
  },
},
  {
    timestamps: true,
  }
);
export default model("User", UserSchema);
