const path = require("path")
const StudentDao = require("../../dao/student.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/student/get.schema")

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

async function getStudent(req, res) {
  try {
    const { id } = req.query

    const valid = ajv.validate(schema, req.query)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    const student = await studentDao.getStudent(id)

    res.json(student)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = getStudent
