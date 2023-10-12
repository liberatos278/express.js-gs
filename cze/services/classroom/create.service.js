const crypto = require("crypto")
const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function createClassroom(req, res) {
  const { name } = req.body
  const id = crypto.randomBytes(8).toString("hex")

  const classroom = await classroomDao.createClassroom({ id, name })

  res.json(classroom)
}

module.exports = createClassroom
