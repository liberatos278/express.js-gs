const path = require("path")
const SubjectDao = require("../../dao/subject.dao")

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function getSubject(req, res) {
  const { id } = req.query

  const subject = await subjectDao.getSubject(id)

  res.json(subject)
}

module.exports = getSubject
