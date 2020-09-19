const router = require("express").Router()
//import models from /db

//routes go here
//reference juke workshop for routes help
router.use('/items', require('./item'))

module.exports = router
