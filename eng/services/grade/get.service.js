const grades = []

async function getGrade(req, res) {
  const id = parseInt(req.query.id)
  const grade = grades.find((grade) => grade.id === id)

  res.json(grade)
}

module.exports = getGrade
