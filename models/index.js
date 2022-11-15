const mongoose = require('mongoose')
const db = mongoose.connection

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log(`MongoDB connected at ${db.host}:${db.port}`)
    })
    .catch((err) => console.log(err))

module.exports = {
    Flavor: require('./Flavor')
}