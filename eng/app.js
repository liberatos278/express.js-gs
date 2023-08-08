const express = require("express")
const app = express()

require("dotenv").config()

app.use("/classroom", require("./controllers/classroom.controller"))
app.use("/student", require("./controllers/student.controller"))
app.use("/grade", require("./controllers/grade.controller"))
app.use("/subject", require("./controllers/subject.controller"))

app.listen(process.env.PORT, () =>
  console.log(`App running on port ${process.env.PORT}`)
)
