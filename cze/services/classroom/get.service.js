const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/classroom/get.schema")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function getClassroom(req, res) {
  try {
    const { id } = req.query

    const valid = ajv.validate(schema, req.query)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    const classroom = await classroomDao.getClassroom(id)

    res.json(classroom)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = getClassroom
