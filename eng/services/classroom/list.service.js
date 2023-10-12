const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function listClassrooms(req, res) {
  const classrooms = await classroomDao.listClassrooms()

  res.json(classrooms)
}

module.exports = listClassrooms
