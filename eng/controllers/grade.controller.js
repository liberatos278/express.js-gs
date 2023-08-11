const express = require("express")
const router = express.Router()

const listGrades = require("../services/grade/list.service")
const getGrade = require("../services/grade/get.service")
const createGrade = require("../services/grade/create.service")
const updateGrade = require("../services/grade/update.service")
const deleteGrade = require("../services/grade/delete.service")

router.get("/list", async (req, res) => {
  await listGrades(req, res)
})

router.get("/get", async (req, res) => {
  await getGrade(req, res)
})

router.post("/create", async (req, res) => {
  await createGrade(req, res)
})

router.put("/update", async (req, res) => {
  await updateGrade(req, res)
})

router.delete("/delete", async (req, res) => {
  await deleteGrade(req, res)
})

module.exports = router
