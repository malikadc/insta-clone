//vHmi9SfYoCieOPdX
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const {MONGOURI} = require('./keys')

require("./models/user")
require("./models/post")


mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=> {
    console.log("Connected to MongoDB")
})

mongoose.connection.on('error',(err)=> {
    console.log("Error connection", err)
})


app.use(express.json())
app.use(require('./routes/auth'))

app.listen(PORT,()=> {
    console.log("server is running on port", PORT)
})



