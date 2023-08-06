const express = require("express")
const app = express()

require("dotenv").config()

app.listen(process.env.PORT, () =>
  console.log(`Aplikace běží na portu ${process.env.PORT}`)
)
