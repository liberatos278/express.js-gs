const path = require("path")
const StudentDao = require("../../dao/student.dao")

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

async function listStudents(req, res) {
  const students = await studentDao.listStudents()

  res.json(students)
}

module.exports = listStudents
