const path = require("path")
const GradeDao = require("../../dao/grade.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/grade/get.schema")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

async function getGrade(req, res) {
  try {
    const { id } = req.query

    const valid = ajv.validate(schema, req.body)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    const grade = await gradeDao.getGrade(id)

    res.json(grade)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = getGrade
