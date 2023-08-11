async function updateStudent(req, res) {
  const { id } = req.body

  const student = {
    id: "12345678",
    firstname: "John",
    surname: "Doe",
    classroomId: "12345678",
    nationalId: "12345678",
  }

  const newStudent = {
    ...student,
    ...req.body,
  }

  res.json(newStudent)
}

module.exports = updateStudent
