const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send("All Ok.")
})








module.exports = app