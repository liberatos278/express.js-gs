async function updateSubject(req, res) {
  const { id, name, shortName, description } = req.body

  const subject = {
    id: "12345678",
    name: "Math",
    shortName: "M",
    description:
      "Math is the science of numbers, spaces, structures and changes.",
  }

  const newSubject = {
    ...subject,
    name: name ? name : subject.name,
    shortName: shortName ? shortName : subject.shortName,
    description: description ? description : subject.description,
  }

  res.json(newSubject)
}

module.exports = updateSubject
