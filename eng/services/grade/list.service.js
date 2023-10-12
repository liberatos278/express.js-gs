const path = require("path")
const GradeDao = require("../../dao/grade.dao")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

async function listGrades(req, res) {
  const grades = await gradeDao.listGrades()

  res.json(grades)
}

module.exports = listGrades
