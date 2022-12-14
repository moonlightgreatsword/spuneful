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
router.get('/:name', async (req, res) => {
    let flavor = await Flavor.findOne({name: req.params.name})
    res.render('show.ejs', {flavor})
})

// create
router.post('/', (req, res) => {
    req.body.pairings = (typeof(req.body.pairings)===Array?req.body.pairings.join(', '):req.body.pairings).split(', ')
    Flavor.create(req.body, (err, flavor) => {
        if (err) {
            console.log(`error ${err}`)
            res.send(err)
        } else {
            res.redirect('/flavors')
        }
    })
})

// destroy flavor
router.delete('/:name', (req, res) => {
    Flavor.findOneAndRemove( { name: req.params.name }, (err, data) => {
        res.redirect('/flavors')
    })
})

// destroy flavor pairing
router.put('/:name/:pair', (req, res) => {
    Flavor.findOneAndUpdate( { name: req.params.name }, { $pull: { pairings: { $in: req.params.pair } } }, { new:true }, (err, updatedModel) => {
        res.redirect(`/flavors/${req.params.name}`)
    } )
})

// update
router.put('/:name/', (req, res) => {
    req.body.pairings = (typeof(req.body.pairings)===Array?req.body.pairings.join(', '):req.body.pairings).split(', ')
    Flavor.findOneAndUpdate( { name: req.params.name }, { $push: { pairings: { $each: req.body.pairings } } }, { new:true }, (err, updatedModel) => {
        res.redirect(`/flavors/${req.params.name}`)
    } )
})

// update

module.exports = router