async function updateSubject(req, res) {
  const { id, name, shortName, description } = req.body

  const subject = {
    id: "12345678",
    name: "Matematika",
    shortName: "M",
    description:
      "Matematika je věda zabývající se čísly, prostory, strukturami a změnami.",
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
