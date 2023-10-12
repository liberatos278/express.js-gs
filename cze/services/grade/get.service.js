const path = require("path")
const GradeDao = require("../../dao/grade.dao")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

async function getGrade(req, res) {
  const { id } = req.query

  const grade = await gradeDao.getGrade(id)

  res.json(grade)
}

module.exports = getGrade
