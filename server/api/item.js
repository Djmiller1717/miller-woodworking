const router = require('express').Router();
const {Item} = require('../db')

router.get('/', async (req, res, next) => {
    try{
        const items = await Item.findAll()
        res.send(items)
    } catch (err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.send(await Item.findByPk(req.params.id))
    } catch(err) {
        next(err)
    }
})

module.exports = router