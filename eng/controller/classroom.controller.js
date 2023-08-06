const express = require("express")
const router = express.Router()

router.get("/list", (req, res) => {
  const classrooms = [
    { id: 1, name: "Quinta" },
    { id: 2, name: "Sexta" },
    { id: 3, name: "Septima" },
    { id: 4, name: "Octava" },
  ]

  res.json(classrooms)
})

module.exports = router
