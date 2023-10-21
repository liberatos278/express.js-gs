const path = require("path")
const StudentDao = require("../../dao/student.dao")

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

async function listStudents(req, res) {
  try {
    const students = await studentDao.listStudents()

    res.json(students)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = listStudents
