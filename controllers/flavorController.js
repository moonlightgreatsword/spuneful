const express = require('express')
const { Flavor } = require('../models')
const router = express.Router()
const db = require('../models')
const flavorSeeds = require('../models/flavorseeds')

// index route
router.get('/', async (req, res) => {
    let flavors = await db.Flavor.find({})
    res.render('index.ejs', {flavors})
})

// new
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// show
router.get('/:name', (req, res) => {
    // const flavor = await Flavor.findById(req.params.id)
    res.send('Show page generated')
    // res.render('show.ejs', {flavor})
})

// create
// router.post('/', (req, res) => {
    // req.body.pairings = (typeof(req.body.pairings)===Array?req.body.pairings.join(', '):req.body.pairings).split(', ')
    // Flavor.create(req.body, (err, flavor) => {
    //     if (err) {
    //         console.log(`error ${err}`)
    //         res.send(err)
    //     } else {
    //         res.redirect('/flavors')
    //     }
    // })
// })

// destroy
// router.delete('/:id', (req, res) => {
//     res.send
// })

// edit

// update

module.exports = router