const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const chef = require('./data/chef.json')

const recipe = require(`http://localhost:5000/chef/:id}`)

app.use(cors())

app.get('/chef', (req, res)=> {
    res.send(chef)
})

app.get('')

app.listen(port, ()=>{
    console.log("Code is...............")
})