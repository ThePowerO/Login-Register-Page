const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require("./models/Users")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/users');

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UsersModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("Incorrect Password")
            }
        } else {
            res.json("Does not exists")
        }
    })
})

app.post('/register', (req, res) => {
    UsersModel.create(req.body)
    .then(users => res.json(users))
    .catch(error => res.json(error))
})

app.listen(3001, () => {
    console.log('Server is running')
})
