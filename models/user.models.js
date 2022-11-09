const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        nombre: {
            type: String,
        },
        apellido: {
            type: String,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            unique:true 
        },
        password: {
            type: String,
        },
        phone: {
            type: String,
        }
    },
}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema)

module.exports = User