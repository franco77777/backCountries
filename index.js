const server = require("./src/app.js")
const { conn } = require("./src/db.js")
const { getCountries } = require("./src/controllers/controlcountry.js")

const port = process.env.PORT || 3977

//conn.sync({ force: false }).then(() => {
server.listen(
  port,
  /* async */ () => {
    //await getCountries()
    console.log("%s listening at " + port) // eslint-disable-line no-console
  }
)
