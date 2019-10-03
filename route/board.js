const express = require('express')
const app = express()
const board = require('../controller/board')

app.get('/:id', board.oneRead);
app.get('/', board.allRead);
app.post('/', board.create);

//app.post('/', board.dummyadd);

// app.get("/",(req,res)=>{
//     console.log("d")
//     res.status(200).json({
//         dummy
//     })

// })


// app.post("/",(req,res)=>{
//     const {data} = req.body
//     dummy.push({
//         data
//     })
//     console.log(dummy)
//     res.status(200).json({
//         dummy
//     })
// })


module.exports = app