const crypto = require("crypto")
const path = require("path")
const SubjectDao = require("../../dao/subject.dao")

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function createSubject(req, res) {
  try {
    const { name, shortName, description } = req.body
    const id = crypto.randomBytes(8).toString("hex")

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
