const path = require("path")
const SubjectDao = require("../../dao/subject.dao")

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function listSubjects(req, res) {
  const subjects = await subjectDao.getSubjects()

  res.json(subjects)
}

module.exports = listSubjects
