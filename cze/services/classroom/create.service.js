const crypto = require("crypto")
const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/classroom/create.schema")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function createClassroom(req, res) {
  try {
    const { name } = req.body
    const id = crypto.randomBytes(8).toString("hex")

    const valid = ajv.validate(schema, req.body)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    const classroom = await classroomDao.createClassroom({ id, name })

    res.json(classroom)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = createClassroom
