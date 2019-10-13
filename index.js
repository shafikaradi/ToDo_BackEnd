const express = require("express")
const mogno = require("mongodb")
require('dotenv').config()
const app = express()

require('./routs/todo')(app)
require('./routs/signup')(app)
require('./routs/login')(app)





app.listen(3000,() => {
    console.log(process.env.HOST)
})