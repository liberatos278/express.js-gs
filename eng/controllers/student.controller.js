const express = require("express")
const router = express.Router()

const getStudent = require("../services/student/get.service")
const listStudents = require("../services/student/list.service")

router.get("/list", async (req, res) => {
  await listStudents(req, res)
})

router.get("/get", async (req, res) => {
  await getStudent(req, res)
})

module.exports = router
