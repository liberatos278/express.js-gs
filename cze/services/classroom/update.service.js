async function updateClassroom(req, res) {
  const { id, name } = req.body

  const classroom = {
    id: "12345678",
    name: "Quinta",
  }

  const newClassroom = { ...classroom, name }
  res.json(newClassroom)
}

module.exports = updateClassroom
