const express = require("express")
const router = express.Router()

router.get("/list", (req, res) => {
  const students = [
    { id: 1, firstname: "Petr", surname: "Novák", nationalId: "123456789" },
    { id: 2, firstname: "Jana", surname: "Nováková", nationalId: "987654321" },
    { id: 3, firstname: "Klára", surname: "Novotná", nationalId: "456789123" },
  ]

  res.json(students)
})

module.exports = router
