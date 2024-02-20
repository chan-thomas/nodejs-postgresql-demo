const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./config/database')

//http://localhost:3000/getUsers
app.get('/getUsers', db.getUsers)
//http://localhost:3000/getUserById/2
app.get('/getUserById/:id', db.getUserById)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, ()=>{
    console.log(`server is up, port:${port}`);
})