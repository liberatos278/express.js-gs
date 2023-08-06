const express = require("express")
const app = express()

require("dotenv").config()

app.use("/classroom", require("./controller/classroom.controller"))
app.use("/student", require("./controller/student.controller"))
app.use("/grade", require("./controller/grade.controller"))
app.use("/subject", require("./controller/subject.controller"))

app.listen(process.env.PORT, () =>
  console.log(`App running on port ${process.env.PORT}`)
)
