async function updateClassroom(req, res) {
  const { id } = req.body

  const classroom = {
    id: "12345678",
    name: "Quinta",
  }

  const newClassroom = { ...classroom, ...req.body }
  res.json(newClassroom)
}

module.exports = updateClassroom
