const express = require("express")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const cors = require("cors")
const routes = require("./routes/index.js")

require("./db.js")

const server = express()

server.name = "API"
server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use("/", routes)

// Error catching endware.

module.exports = server
