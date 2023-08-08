const subjects = []

async function getSubject(req, res) {
  const id = parseInt(req.query.id)
  const subject = subjects.find((subject) => subject.id === id)

  res.json(subject)
}

module.exports = getSubject
