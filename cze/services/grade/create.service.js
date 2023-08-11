const crypto = require("crypto")

async function createGrade(req, res) {
  const { grade, weight, description, dateTs, studentId, subjectId } = req.body
  const id = crypto.randomBytes(8).toString("hex")
  const classroomId = "?"

  const gradeObj = {
    id,
    grade,
    weight,
    description,
    dateTs,
    studentId,
    subjectId,
    classroomId,
  }

  res.json(gradeObj)
}

module.exports = createGrade
