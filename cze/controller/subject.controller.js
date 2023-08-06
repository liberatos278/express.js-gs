const express = require("express")
const router = express.Router()

router.get("/list", (req, res) => {
  const subjects = []
  res.json(subjects)
})

module.exports = router
