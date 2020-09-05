const db = require('./db')
const {Item} = require('./models/item')

const syncAndSeed = async() => {
    await db.sync({force: true})
    const [] = await Promise.all([
        Item.create({
            name: 'Kitchen Table',
            price: 100,
            woodType: 'Oak'
        }),
        Item.create({
            name: 'Headboard',
            price: 75,
            woodType: 'Pine'
        })
    ])
}

module.exports = syncAndSeed