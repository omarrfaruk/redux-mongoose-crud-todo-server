const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./routes/route');
require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()


app.use(express.json())
app.use(cors())
app.use(route)
const MONGODB_URL = `mongodb+srv://hobby-store:1WaRlRzgpcpbMPBS@cluster0.jnzdgxt.mongodb.net/?retryWrites=true&w=majority`

//1WaRlRzgpcpbMPBS
//hobby-store

mongoose.connect(MONGODB_URL)
    .then(() => {
        app.listen(port, () => {
            console.log('server is running')
        })
    }).catch((err) => console.log(err))