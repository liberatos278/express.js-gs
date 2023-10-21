const path = require("path")
const StudentDao = require("../../dao/student.dao")

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

async function getStudent(req, res) {
  try {
    const { id } = req.query

    const student = await studentDao.getStudent(id)

    res.json(student)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = getStudent
