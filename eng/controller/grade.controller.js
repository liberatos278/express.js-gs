const express = require("express")
const router = express.Router()

router.get("/list", (req, res) => {
  const grades = []
  res.json(grades)
})

module.exports = router
