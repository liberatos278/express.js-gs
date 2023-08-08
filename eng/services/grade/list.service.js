const grades = []

async function listGrades(req, res) {
  res.json(grades)
}

module.exports = listGrades
