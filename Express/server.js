const express = require('express')
const app = express()
const port = 8000


app.use( express.json());
app.use( express.urlencoded({ extended: true }));

const users = [
    {first: "Kyle", last: "Marymee"},
    {first: "Alexksey", last: "Kashubin"},
    {first: "Ben", last: "Gomez"},
    {first: "Austin", last: "Serb"},
    {first: "Kurt", last: "Clausen"},
]

app.get('/api', (req, res) => {
    res.json({message: "Hello World"});
})

app.get("/api/users", (req, res) => {
    res.json(users)
})

app.get("/api/users/:id", (req, res) => {
    res.json(users[req.params.id])
})

app.post("/api/users", (req, res)=> {
    users.push(req.body)
    res.json(req.body)
})

app.put("/api/users/:id", (req, res) => {
    const id = req.params.id
    users[id] = req.body
})

app.delete("/api/users/:id", (req, res)=>{
    const id = req.params.id
    users.splice(id, 1)
    res.json({msg: "ok"})
})

app.listen( port, ()=>console.log(">>>SERVER ONLINE"))