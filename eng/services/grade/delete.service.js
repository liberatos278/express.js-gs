const path = require("path")
const GradeDao = require("../../dao/grade.dao")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

async function deleteGrade(req, res) {
  const { id } = req.body

  await gradeDao.deleteGrade(id)

  res.status(204).end()
}

module.exports = deleteGrade
