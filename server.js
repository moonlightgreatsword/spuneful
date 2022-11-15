require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const {render} = require('ejs')

const app = express()

const PORT = process.env.PORT||4000
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
const flavorController = require('./controllers/flavorController.js')
app.use('/flavors', flavorController)

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get((req, res) => {
    res.send('404 error: page not found')
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})