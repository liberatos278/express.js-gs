const crypto = require("crypto")
const path = require("path")
const GradeDao = require("../../dao/grade.dao")
const StudentDao = require("../../dao/student.dao")
const SubjectDao = require("../../dao/subject.dao")

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function createGrade(req, res) {
  const { grade, weight, description, dateTs, studentId, subjectId } = req.body
  const id = crypto.randomBytes(8).toString("hex")

  const student = await studentDao.getStudent(studentId)
  if (!student)
    return res.status(400).end(`Student with id ${studentId} does not exist`)

  const subject = await subjectDao.getSubject(subjectId)
  if (!subject)
    return res.status(400).end(`Subject with id ${subjectId} does not exist`)

  const classroomId = student.classroomId
  const gradeObj = await gradeDao.createGrade({
    id,
    grade,
    weight,
    description,
    dateTs,
    studentId,
    subjectId,
    classroomId,
  })

  res.json(gradeObj)
}

module.exports = createGrade
