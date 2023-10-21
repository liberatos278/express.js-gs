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
  try {
    const { id, subjectId, studentId, dateTs, grade, description, weight } =
      req.params

    const subject = await subjectDao.getSubject(subjectId)
    if (!subject)
      throw {
        status: 400,
        message: `Subject with id ${subjectId} doesn't exist`,
      }

    const student = await studentDao.getStudent(studentId)
    if (!student)
      throw {
        status: 400,
        message: `Student with id ${studentId} doesn't exist`,
      }

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
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = updateGrade
