const express = require("express")
const router = express.Router()

const students = [
  { id: 1, firstname: "Petr", surname: "Novák", nationalId: "123456789" },
  { id: 2, firstname: "Jana", surname: "Nováková", nationalId: "987654321" },
  { id: 3, firstname: "Klára", surname: "Novotná", nationalId: "456789123" },
]

router.get("/list", (req, res) => {
  res.json(students)
})

router.get("/get", (req, res) => {
  const id = parseInt(req.query.id)
  const student = students.find((student) => student.id === id)

  res.json(student)
})

module.exports = router
