const express = require("express")
const router = express.Router()

const listClassrooms = require("../services/classroom/list.service")
const getClassroom = require("../services/classroom/get.service")

router.get("/list", async (req, res) => {
  await listClassrooms(req, res)
})

router.get("/get", async (req, res) => {
  await getClassroom(req, res)
})

module.exports = router
