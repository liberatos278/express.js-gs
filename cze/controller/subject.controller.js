const express = require("express")
const router = express.Router()

const subjects = []

router.get("/list", (req, res) => {
  res.json(subjects)
})

module.exports = router
