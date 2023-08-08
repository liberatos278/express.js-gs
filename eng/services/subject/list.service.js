const subjects = []

async function listSubjects(req, res) {
  res.json(subjects)
}

module.exports = listSubjects
