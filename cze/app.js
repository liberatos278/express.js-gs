const express = require("express")
const app = express()

require("dotenv").config()

app.use(express.json())

app.use("/classroom", require("./controllers/classroom.controller"))
app.use("/student", require("./controllers/student.controller"))
app.use("/grade", require("./controllers/grade.controller"))
app.use("/subject", require("./controllers/subject.controller"))

app.listen(process.env.PORT, () =>
  console.log(`Aplikace běží na portu ${process.env.PORT}`)
)
