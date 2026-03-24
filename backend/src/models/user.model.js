import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            owercase: true,
            trim: true, // this is for the removal of the spaces in the username
            minLength: 3,
            maxLegnth: 30
        },
        
        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLegnth: 50
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        },

    },

    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)