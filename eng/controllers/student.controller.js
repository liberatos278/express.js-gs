const express = require("express")
const router = express.Router()

const getStudent = require("../services/student/get.service")
const listStudents = require("../services/student/list.service")
const createStudent = require("../services/student/create.service")

router.get("/list", async (req, res) => {
  await listStudents(req, res)
})

router.get("/get", async (req, res) => {
  await getStudent(req, res)
})

router.post("/create", async (req, res) => {
  await createStudent(req, res)
})

module.exports = router
