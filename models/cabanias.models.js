const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cabaniasSchema = new Schema({
    username:{ type: String, required: true},
    description: {type: String, required:true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}, 
        
} ,{
    timestamps:true,
})

const Cabanias = mongoose.model("Cabanias", cabaniasSchema)

module.exports = Cabanias