const express = require('express')
const app = express()
const cors = require("cors")

// midleware

app.use(express.json()) // req.body
app.use(cors())

// Routes 

//register and login routes

app.use("/auth", require("./routes/jwtAuth"))

app.listen(5000, () => {
    console.log("server is running on port 5000")
})