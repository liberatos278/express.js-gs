async function updateSubject(req, res) {
  const { id } = req.body

  const subject = {
    id: "12345678",
    name: "Math",
    shortName: "M",
    description:
      "Math is the science of numbers, spaces, structures and changes.",
  }

  const newSubject = {
    ...subject,
    ...req.body,
  }

  res.json(newSubject)
}

module.exports = updateSubject
