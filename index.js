const server = require("./src/app.js")
const { conn } = require("./src/db.js")
const { getCountries } = require("./src/controllers/controlcountry.js")

const PORT = process.env.PORT || 3977

conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    await getCountries()
    console.log("%s listening at " + PORT) // eslint-disable-line no-console
  })
})
