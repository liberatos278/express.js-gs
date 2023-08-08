const express = require("express")
const router = express.Router()

const listGrades = require("../services/grade/list.service")
const getGrade = require("../services/grade/get.service")

const grades = []

router.get("/list", async (req, res) => {
  await listGrades(req, res)
})

router.get("/get", async (req, res) => {
  await getGrade(req, res)
})

module.exports = router
