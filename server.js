const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection
connection.once("open", () => { 
    console.log("Conexion con la BD establecida")
})

const cabaniasRouter = require("./routes/cabanias")
const usersRouter = require("./routes/users")


app.use("/cabanias", cabaniasRouter)
app.use("/users", usersRouter)


app.listen(port, () => {
    console.log(`Server esta corriendo en el puerto: ${port}`)
})

