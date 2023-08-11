async function updateSubject(req, res) {
  const { id } = req.body

  const subject = {
    id: "12345678",
    name: "Matematika",
    shortName: "M",
    description:
      "Matematika je věda o číslech, prostorech, strukturách a změnách.",
  }

  const newSubject = {
    ...subject,
    ...req.body,
  }

  res.json(newSubject)
}

module.exports = updateSubject
