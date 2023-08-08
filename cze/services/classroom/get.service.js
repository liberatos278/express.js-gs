const classrooms = [
  { id: 1, name: "Quinta" },
  { id: 2, name: "Sexta" },
  { id: 3, name: "Septima" },
  { id: 4, name: "Octava" },
]

async function getClassroom(req, res) {
  const id = parseInt(req.query.id)
  const classroom = classrooms.find((classroom) => classroom.id === id)

  res.json(classroom)
}

module.exports = getClassroom
