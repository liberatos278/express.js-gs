const path = require("path")
const SubjectDao = require("../../dao/subject.dao")

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function updateSubject(req, res) {
  try {
    const { id, name, shortName, description } = req.body

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
