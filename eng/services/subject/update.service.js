const path = require("path")
const SubjectDao = require("../../dao/subject.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/subject/update.schema")

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function updateSubject(req, res) {
  try {
    const { id, name, shortName, description } = req.body

    const valid = ajv.validate(schema, req.body)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    const newSubject = await subjectDao.updateSubject({
      id,
      name,
      shortName,
      description,
    })

    res.json(newSubject)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = updateSubject
