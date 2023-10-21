const path = require("path")
const GradeDao = require("../../dao/grade.dao")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

async function getGrade(req, res) {
  try {
    const { id } = req.query

    const grade = await gradeDao.getGrade(id)

    res.json(grade)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = getGrade
