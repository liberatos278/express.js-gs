const express = require("express")
const router = express.Router()

const getSubject = require("../services/subject/get.service")
const listSubjects = require("../services/subject/list.service")

const subjects = []

router.get("/list", async (req, res) => {
  await listSubjects(req, res)
})

router.get("/get", async (req, res) => {
  await getSubject(req, res)
})

module.exports = router
