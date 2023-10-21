const path = require("path")
const SubjectDao = require("../../dao/subject.dao")

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function getSubject(req, res) {
  try {
    const { id } = req.query

    const subject = await subjectDao.getSubject(id)

    res.json(subject)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = getSubject
