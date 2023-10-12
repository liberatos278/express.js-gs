const crypto = require("crypto")
const path = require("path")
const SubjectDao = require("../../dao/subject.dao")

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function createSubject(req, res) {
  const { name, shortName, description } = req.body
  const id = crypto.randomBytes(8).toString("hex")

  const subject = await subjectDao.createSubject({
    id,
    name,
    shortName,
    description,
  })

  res.json(subject)
}

module.exports = createSubject
