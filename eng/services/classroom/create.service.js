const crypto = require("crypto")

async function createClassroom(req, res) {
  const { name } = req.body
  const id = crypto.randomBytes(8).toString("hex")

  const classroom = { id, name }
  res.json(classroom)
}

module.exports = createClassroom
