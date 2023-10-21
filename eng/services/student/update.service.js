const path = require("path")
const StudentDao = require("../../dao/student.dao")
const ClassroomDao = require("../../dao/classroom.dao")

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function updateStudent(req, res) {
  try {
    const { id, firstname, surname, nationalId, classroomId } = req.body

    const classroom = await classroomDao.getClassroom(classroomId)
    if (!classroom)
      throw {
        status: 400,
        message: `Classroom with id ${classroomId} doesn't exist`,
      }

    const newStudent = await studentDao.updateStudent({
      id,
      firstname,
      surname,
      nationalId,
      classroomId,
    })

    res.json(newStudent)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = updateStudent
