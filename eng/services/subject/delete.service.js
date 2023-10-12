const path = require("path")
const SubjectDao = require("../../dao/subject.dao")
const GradeDao = require("../../dao/grade.dao")

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

async function deleteSubject(req, res) {
  const { id } = req.body

  await subjectDao.deleteSubject(id)

  const grades = await gradeDao.getGrades()
  for (const grade of grades) {
    if (grade.subjectId === id) {
      await gradeDao.deleteGrade(grade.id)
    }
  }

  res.status(204).end()
}

module.exports = deleteSubject
