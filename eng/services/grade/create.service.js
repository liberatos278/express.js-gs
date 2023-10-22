const crypto = require("crypto")
const path = require("path")
const GradeDao = require("../../dao/grade.dao")
const StudentDao = require("../../dao/student.dao")
const SubjectDao = require("../../dao/subject.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/grade/create.schema")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function createGrade(req, res) {
  try {
    const { grade, weight, description, dateTs, studentId, subjectId } =
      req.body
    const id = crypto.randomBytes(8).toString("hex")

    const valid = ajv.validate(schema, req.body)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    const student = await studentDao.getStudent(studentId)
    if (!student)
      throw {
        status: 400,
        message: `Student with id ${studentId} doesn't exist`,
      }

    const subject = await subjectDao.getSubject(subjectId)
    if (!subject)
      throw {
        status: 400,
        message: `Subject with id ${subjectId} doesn't exist`,
      }

    const classroomId = student.classroomId
    const gradeObj = await gradeDao.createGrade({
      id,
      grade,
      weight,
      description,
      dateTs,
      studentId,
      subjectId,
      classroomId,
    })

    res.json(gradeObj)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = createGrade
