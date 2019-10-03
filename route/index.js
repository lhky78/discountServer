const express = require('express')
const app = express()
const auth = require('./auth')
const board = require('./board')

// app.get('/asdf',(req,res)=>{
//     res.send('hello world')
// })

app.use('/auth', auth)
app.use('/board', board)



// export{ app }
module.exports = app
