const path = require("path")
const ClassroomDao = require("../../dao/classroom.dao")
const StudentDao = require("../../dao/student.dao")
const GradeDao = require("../../dao/grade.dao")
const SubjectDao = require("../../dao/subject.dao")

const classroomDao = new ClassroomDao(
  path.join(__dirname, "..", "..", "data", "classrooms.json")
)

const studentDao = new StudentDao(
  path.join(__dirname, "..", "..", "data", "students.json")
)

const gradeDao = new GradeDao(
  path.join(__dirname, "..", "..", "data", "grades.json")
)

const subjectDao = new SubjectDao(
  path.join(__dirname, "..", "..", "data", "subjects.json")
)

async function loadClassroom(req, res) {
  try {
    const { id } = req.query
    const classroom = await classroomDao.getClassroom(id)

    if (!classroom)
      throw {
        status: 400,
        message: `Classroom with id ${id} doesn't exist`,
      }

    const students = await studentDao.listStudents().then((students) => {
      return students.filter((student) => student.classroomId === id)
    })

    const grades = await gradeDao.listGrades()
    const subjects = await subjectDao.listSubjects()

    students.forEach((student) => {
      student.subjectList = []

      subjects.forEach((subject) => {
        let averageGrade = null
        const studentSubjectGrades = grades.filter(
          (grade) =>
            grade.studentId === student.id && grade.subjectId === subject.id
        )

        let gradeSum = 0
        let weightSum = 0

        studentSubjectGrades.forEach((grade) => {
          gradeSum += grade.grade * grade.weight
          weightSum += grade.weight
        })

        if (gradeSum) averageGrade = gradeSum / weightSum
        student.subjectList.push({ ...subject, averageGrade })
      })
    })

    res.json({ ...classroom, studentList: students })
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message })
  }
}

module.exports = loadClassroom
