const server = require("./src/app.js")
const { conn } = require("./src/db.js")
const { getCountries } = require("./src/controllers/controlcountry.js")

conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    await getCountries()
    console.log("%s listening at 3001") // eslint-disable-line no-console
  })
})
