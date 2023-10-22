const path = require("path")
const StudentDao = require("../../dao/student.dao")
const GradesDao = require("../../dao/grade.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/student/delete.schema")

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

const gradesDao = new GradesDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

async function deleteStudent(req, res) {
  try {
    const { id } = req.body

    const valid = ajv.validate(schema, req.body)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    await studentDao.deleteStudent(id)

    const grades = await gradesDao.listGrades()
    for (let grade of grades) {
      if (grade.studentId === id) {
        await gradesDao.deleteGrade(grade.id)
      }
    }

    res.status(204).end()
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = deleteStudent
