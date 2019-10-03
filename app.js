const express = require('express')
const app = express()
const route = require('./route')

app.use(express.json())

app.use('/',route)

app.listen(3000, () => {
    console.log("Express server has started on port 3000")
})