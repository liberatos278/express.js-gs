const express = require("express")
const router = express.Router()

const subjects = []

router.get("/list", (req, res) => {
  res.json(subjects)
})

router.get("/get", (req, res) => {
  const id = parseInt(req.query.id)
  const subject = subjects.find((subject) => subject.id === id)

  res.json(subject)
})

module.exports = router
