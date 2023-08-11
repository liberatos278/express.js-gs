const crypto = require("crypto")

async function createStudent(req, res) {
  const { firstname, surname, nationalId, classroomId } = req.body
  const id = crypto.randomBytes(8).toString("hex")

  const student = { id, firstname, surname, nationalId, classroomId }
  res.json(student)
}

module.exports = createStudent
