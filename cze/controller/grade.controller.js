const express = require("express")
const router = express.Router()

const grades = []

router.get("/list", (req, res) => {
  res.json(grades)
})

router.get("/get", (req, res) => {
  const id = parseInt(req.query.id)
  const grade = grades.find((grade) => grade.id === id)

  res.json(grade)
})

module.exports = router
