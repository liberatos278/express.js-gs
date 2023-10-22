const crypto = require("crypto")
const path = require("path")
const StudentDao = require("../../dao/student.dao")
const ClassroomDao = require("../../dao/classroom.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/student/create.schema")

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

    const valid = ajv.validate(schema, req.body)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    const classroom = await classroomDao.getClassroom(classroomId)
    if (!classroom)
      throw {
        status: 400,
        message: `Třída s identifikátorem ${classroomId} neexistuje`,
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
