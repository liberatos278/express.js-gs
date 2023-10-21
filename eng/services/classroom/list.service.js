const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function listClassrooms(req, res) {
  try {
    const classrooms = await classroomDao.listClassrooms()
    res.json(classrooms)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = listClassrooms
