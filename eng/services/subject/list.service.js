const path = require("path")
const SubjectDao = require("../../dao/subject.dao")

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function listSubjects(req, res) {
  try {
    const subjects = await subjectDao.listSubjects()

    res.json(subjects)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = listSubjects
