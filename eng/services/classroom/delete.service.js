async function deleteClassroom(req, res) {
  const { id } = req.body

  res.status(204).end()
}

module.exports = deleteClassroom
