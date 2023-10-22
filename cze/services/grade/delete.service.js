const path = require("path")
const GradeDao = require("../../dao/grade.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/grade/delete.schema")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

async function deleteGrade(req, res) {
  try {
    const { id } = req.body

    const valid = ajv.validate(schema, req.body)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    await gradeDao.deleteGrade(id)

    res.status(204).end()
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = deleteGrade
