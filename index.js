const express = require("express")
const app = express

app.get("/", async (req, res) => {
    res.send("Hi welcome to my server")
})

app.listen(9014, () => {
    console.log("Connected To:", "9014")
})