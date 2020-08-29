const express = require("express")
//initialize app
const app = express()
//require morgan|volleyball, path packages
const morgan = require('morgan')
//require db from /db
const {db} = require('./db')

//use morgan|volleyball
app.use(morgan('dev'))
//use express.json()
app.use(expres.json())
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use('/public', express.static(path.join(__dirname, 'public')))
//still need to install path (not sure if dev dependency or not - also unsure of path)
//app.use('/public', express.static(path.join(__dirname, 'server/public')))

//require in your routes and use them on your api path

//404 handler

//500 handler

//set PORT

//listen
