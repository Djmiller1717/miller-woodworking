//import your db
const db = require('./db')
//import your models
const {Item} = require('./models/item')
const syncAndSeed = require('./seed')
//state your model associations (hasOne etc)

//export your db and Models (so they all can be imported from a single central location)
module.exports = {
    db,
    Item,
    syncAndSeed
}