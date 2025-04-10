const express = require('express')

const app  = express()

app.get('/', (req,res)=> {
    res.json('Heloo from Workflows Gitactions')
})

app.listen('3001', ()=> console.log('Server is running on 3001'))
