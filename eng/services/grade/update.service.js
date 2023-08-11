async function updateGrade(req, res) {
  const { id } = req.body

  const gradeObj = {
    id: "12345678",
    grade: 1,
    weight: 2,
    description: "Test",
    dateTs: "2022-07-15T09:24:36.541Z",
    studentId: "12345678",
    subjectId: "12345678",
  }

  const newGrade = {
    ...gradeObj,
    ...req.body,
  }

  res.json(newGrade)
}

module.exports = updateGrade
