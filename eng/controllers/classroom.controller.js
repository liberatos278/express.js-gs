const express = require("express")
const router = express.Router()

const listClassrooms = require("../services/classroom/list.service")
const getClassroom = require("../services/classroom/get.service")
const createClassroom = require("../services/classroom/create.service")

router.get("/list", async (req, res) => {
  await listClassrooms(req, res)
})

router.get("/get", async (req, res) => {
  await getClassroom(req, res)
})

router.post("/create", async (req, res) => {
  await createClassroom(req, res)
})

module.exports = router
