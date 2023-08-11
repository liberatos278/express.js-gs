async function updateGrade(req, res) {
  const { id, grade, weight, description, dateTs } = req.body

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
    grade: grade ? grade : gradeObj.grade,
    weight: weight ? weight : gradeObj.weight,
    description: description ? description : gradeObj.description,
    dateTs: dateTs ? dateTs : gradeObj.dateTs,
  }

  res.json(newGrade)
}

module.exports = updateGrade
