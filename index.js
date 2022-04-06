//import express
const express = require("express")
//instantiate
const app = express()
const res = require("express/lib/response")

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.get("/greet",(req,res) => {
    res.send("<h1>Hello Everyone</h1>")
})



app.listen(4000, () => {
    console.log("🚀 Server Running on Port 4000");
}) 