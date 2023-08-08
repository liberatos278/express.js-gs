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

module.exports = router
