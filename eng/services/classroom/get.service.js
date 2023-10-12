const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function getClassroom(req, res) {
  const { id } = req.query
  const classroom = await classroomDao.getClassroom(id)

  res.json(classroom)
}

module.exports = getClassroom
