const express = require("express")
const app = express()
const morgan = require('morgan')
const path = require('path')
const {syncAndSeed} = require('./db')


app.use(morgan('dev'))
app.use(express.json())
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use('/public', express.static(path.join(__dirname, 'public')))
//app.use('/public', express.static(path.join(__dirname, 'server/public')))

app.use('/api', require('./api'))

//404 handler

//500 handler

const PORT = 3000
const init = async function(){
    await syncAndSeed()
    app.listen(PORT, function(){
        console.log(`Server is listening on port ${PORT}`)
    })
}

init()