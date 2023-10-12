const path = require("path")
const GradeDao = require("../../dao/grade.dao")
const SubjectDao = require("../../dao/subject.dao")
const StudentDao = require("../../dao/student.dao")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

async function updateGrade(req, res) {
  const { id, subjectId, studentId, dateTs, grade, description, weight } =
    req.params

  const subject = await subjectDao.getSubject(subjectId)
  if (!subject)
    return res
      .status(400)
      .end(`Předmět s identifikátorem ${subjectId} neexistuje`)

  const student = await studentDao.getStudent(studentId)
  if (!student)
    return res
      .status(400)
      .end(`Student s identifikátorem ${studentId} neexistuje`)

  const classroomId = student.classroomId
  const newGrade = await gradeDao.updateGrade({
    id,
    subjectId,
    studentId,
    dateTs,
    grade,
    description,
    weight,
    classroomId,
  })

  res.json(newGrade)
}

module.exports = updateGrade
