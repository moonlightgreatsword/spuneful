const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flavorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    pairings: [String],
}, {timestamps: true})

const Flavor = mongoose.model('Flavor', flavorSchema)
module.exports = Flavor