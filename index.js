const { conn } = require("./src/db.js")
const { getCountries } = require("./src/controllers/controlcountry.js")
const express = require("express")
const routes = require("./src/routes/index")
const port = process.env.PORT || 3977

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use("/", routes)

//conn.sync({ force: false }).then(() => {
server.listen(
  port,
  /* async */ () => {
    //await getCountries()
    console.log("%s listening at " + port) // eslint-disable-line no-console
  }
)
