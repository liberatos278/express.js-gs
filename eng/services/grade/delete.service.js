const path = require("path")
const GradeDao = require("../../dao/grade.dao")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

async function deleteGrade(req, res) {
  try {
    const { id } = req.body

    await gradeDao.deleteGrade(id)

    res.status(204).end()
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = deleteGrade
