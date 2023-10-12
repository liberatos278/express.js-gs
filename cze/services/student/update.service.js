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
  const { id, firstname, surname, nationalId, classroomId } = req.body

  const classroom = await classroomDao.getClassroom(classroomId)
  if (!classroom) {
    return res
      .status(400)
      .end(`Třída s identifikátorem ${classroomId} neexistuje`)
  }

  const newStudent = await studentDao.updateStudent({
    id,
    firstname,
    surname,
    nationalId,
    classroomId,
  })

  res.json(newStudent)
}

module.exports = updateStudent
