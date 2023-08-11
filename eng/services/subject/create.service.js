const crypto = require("crypto")

async function createSubject(req, res) {
  const { name, shortName, description } = req.body
  const id = crypto.randomBytes(8).toString("hex")

  const subject = { id, name, shortName, description }
  res.json(subject)
}

module.exports = createSubject
