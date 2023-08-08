const classrooms = [
  { id: 1, name: "Quinta" },
  { id: 2, name: "Sexta" },
  { id: 3, name: "Septima" },
  { id: 4, name: "Octava" },
]

async function listClassrooms(req, res) {
  res.json(classrooms)
}

module.exports = listClassrooms
