async function updateStudent(req, res) {
  const { id, firstname, surname, classroomId } = req.body

  const student = {
    id: "12345678",
    firstname: "John",
    surname: "Doe",
    classroomId: "12345678",
    nationalId: "12345678",
  }

  const newStudent = {
    ...student,
    firstname: firstname ? firstname : student.firstname,
    surname: surname ? surname : student.surname,
    classroomId: classroomId ? classroomId : student.classroomId,
  }

  res.json(newStudent)
}

module.exports = updateStudent
