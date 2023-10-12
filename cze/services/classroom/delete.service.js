const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")
const StudentDao = require("../../dao/student.dao")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

async function deleteClassroom(req, res) {
  const { id } = req.body

  await classroomDao.deleteClassroom(id)

  const students = await studentDao.listStudents()
  for (let student of students) {
    if (student.classroomId === id) {
      await studentDao.deleteStudent(student.id)
    }
  }

  res.status(204).end()
}

module.exports = deleteClassroom
