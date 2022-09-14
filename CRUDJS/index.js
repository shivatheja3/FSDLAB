const express = require('express')
const app = express()
const alienRoutes = require('./routes/aliens')
const mongoose = require('mongoose')
const cors = require('cors');


const url = 'mongodb://localhost/alienDB'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection


con.on('open', () => {
    console.log('database connected')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
app.use('/aliens', alienRoutes)


app.get("/", (req, res) => {
    res.send("hello")
})


app.listen(4000, () => {
    console.log("connected")
})