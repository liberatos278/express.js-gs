const path = require("path")
const GradeDao = require("../../dao/grade.dao")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

async function listGrades(req, res) {
  try {
    const grades = await gradeDao.listGrades()

    res.json(grades)
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = listGrades
