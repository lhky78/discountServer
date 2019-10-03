const express = require('express')
const app = express()

app.post('/login',(req,res)=>{
//    const email = req.body.email
//    const password = req.body.password

   const { email, password } = req.body 

    res.status(200).json({
        result : 'email은 ' + email,
        email,
        text : `email은 ${email}`  //`${}`변수를 보여준다
    })

})


module.exports = app