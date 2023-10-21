const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function getClassroom(req, res) {
  try {
    const { id } = req.query
    const classroom = await classroomDao.getClassroom(id)

    res.json(classroom)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = getClassroom
