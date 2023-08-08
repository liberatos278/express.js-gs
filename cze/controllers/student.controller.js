const express = require("express")
const router = express.Router()

const getStudent = require("../services/student/get.service")
const listStudents = require("../services/student/list.service")

const students = [
  { id: 1, firstname: "Petr", surname: "Novák", nationalId: "123456789" },
  { id: 2, firstname: "Jana", surname: "Nováková", nationalId: "987654321" },
  { id: 3, firstname: "Klára", surname: "Novotná", nationalId: "456789123" },
]

router.get("/list", async (req, res) => {
  await listStudents(req, res)
})

router.get("/get", async (req, res) => {
  await getStudent(req, res)
})

module.exports = router
