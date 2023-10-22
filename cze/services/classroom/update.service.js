const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/classroom/update.schema")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

async function updateClassroom(req, res) {
  try {
    const { id, name } = req.body

    const valid = ajv.validate(schema, req.body)
    if (!valid)
      throw {
        status: 400,
        message: ajv.errors,
      }

    const updatedClassroom = await classroomDao.updateClassroom({ id, name })

    res.json(updatedClassroom)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = updateClassroom
