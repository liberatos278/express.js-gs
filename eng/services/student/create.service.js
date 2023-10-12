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
  const { firstname, surname, nationalId, classroomId } = req.body
  const id = crypto.randomBytes(8).toString("hex")

  const classroom = await classroomDao.getClassroom(classroomId)
  if (!classroom) {
    return res
      .status(400)
      .end(`Classroom with id ${classroomId} does not exist`)
  }

  const student = await studentDao.createStudent({
    id,
    firstname,
    surname,
    nationalId,
    classroomId,
  })

  res.json(student)
}

module.exports = createStudent
