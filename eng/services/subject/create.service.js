const crypto = require("crypto")
const path = require("path")
const SubjectDao = require("../../dao/subject.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/subject/create.schema")

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function createSubject(req, res) {
  try {
    const { name, shortName, description } = req.body
    const id = crypto.randomBytes(8).toString("hex")

    const valid = ajv.validate(schema, req.body)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    const subject = await subjectDao.createSubject({
      id,
      name,
      shortName,
      description,
    })

    res.json(subject)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = createSubject
