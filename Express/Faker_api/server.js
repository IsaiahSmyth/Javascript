const express = require('express')
const app = express()
const port = 8001


app.use( express.json());
app.use( express.urlencoded({ extended: true }));


const routAttacher = require('./router/user/routers')

routAttacher(app)



app.listen( port, ()=>console.log(">>>SERVER ONLINE"))