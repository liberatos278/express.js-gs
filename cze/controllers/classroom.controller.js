const express = require("express")
const router = express.Router()

const classrooms = [
  { id: 1, name: "Quinta" },
  { id: 2, name: "Sexta" },
  { id: 3, name: "Septima" },
  { id: 4, name: "Octava" },
]

router.get("/list", (req, res) => {
  res.json(classrooms)
})

router.get("/get", (req, res) => {
  const id = parseInt(req.query.id)
  const classroom = classrooms.find((classroom) => classroom.id === id)

  res.json(classroom)
})

module.exports = router
