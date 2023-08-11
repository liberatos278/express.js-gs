const express = require("express")
const router = express.Router()

const getStudent = require("../services/student/get.service")
const listStudents = require("../services/student/list.service")
const createStudent = require("../services/student/create.service")
const updateStudent = require("../services/student/update.service")
const deleteStudent = require("../services/student/delete.service")

router.get("/list", async (req, res) => {
  await listStudents(req, res)
})

router.get("/get", async (req, res) => {
  await getStudent(req, res)
})

router.post("/create", async (req, res) => {
  await createStudent(req, res)
})

router.put("/update", async (req, res) => {
  await updateStudent(req, res)
})

router.delete("/delete", async (req, res) => {
  await deleteStudent(req, res)
})

module.exports = router
