const crypto = require("crypto")
const path = require("path")
const StudentDao = require("../../dao/student.dao")
const ClassroomDao = require("../../dao/classroom.dao")

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function createStudent(req, res) {
  try {
    const { firstname, surname, nationalId, classroomId } = req.body
    const id = crypto.randomBytes(8).toString("hex")

    const classroom = await classroomDao.getClassroom(classroomId)
    if (!classroom)
      throw {
        status: 400,
        message: `Classroom with id ${classroomId} doesn't exist`,
      }

    const student = await studentDao.createStudent({
      id,
      firstname,
      surname,
      nationalId,
      classroomId,
    })

    res.json(student)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = createStudent
