import mongoose from "mongoose";
import { IUser, IUserRegister } from "./user.interface";

const UserSchema = new mongoose.Schema({
    email: { type: String, require: true} ,
    name: { type: String, require: true },
    firstname: { type: String, require: true },
    age: { type: Number, require: true },
    connected: { type: Boolean, require: true}
})

export const User = mongoose.model<IUser & mongoose.Document>('user', UserSchema);


const UserRegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const UserRegister = mongoose.model<IUserRegister & mongoose.Document>('userRegister', UserRegisterSchema);
