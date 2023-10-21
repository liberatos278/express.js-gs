const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function updateClassroom(req, res) {
  try {
    const { id, name } = req.body
    const updatedClassroom = await classroomDao.updateClassroom({ id, name })

    res.json(updatedClassroom)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = updateClassroom
