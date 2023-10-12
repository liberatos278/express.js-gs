const express = require("express")
const router = express.Router()

const listClassrooms = require("../services/classroom/list.service")
const getClassroom = require("../services/classroom/get.service")
const createClassroom = require("../services/classroom/create.service")
const updateClassroom = require("../services/classroom/update.service")
const deleteClassroom = require("../services/classroom/delete.service")
const loadClassrooms = require("../services/classroom/load.service")

router.get("/list", async (req, res) => {
  await listClassrooms(req, res)
})

router.get("/get", async (req, res) => {
  await getClassroom(req, res)
})

router.get("/load", async (req, res) => {
  await loadClassrooms(req, res)
})

router.post("/create", async (req, res) => {
  await createClassroom(req, res)
})

router.put("/update", async (req, res) => {
  await updateClassroom(req, res)
})

router.delete("/delete", async (req, res) => {
  await deleteClassroom(req, res)
})

module.exports = router
