const express = require("express")
const router = express.Router()

const grades = []

router.get("/list", (req, res) => {
  res.json(grades)
})

module.exports = router
