const fs = require("fs/promises")
const path = require("path")
const crypto = require("crypto")

const DEFAULT_DATA_PATH = path.join(__dirname, "data", "subjects.json")

class SubjectDao {
  constructor(dataPath) {
    this.subjectDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH
  }

  async getSubject(id) {
    const subjects = await this._loadSubjects()
    return subjects.find((subject) => subject.id === id)
  }

  async listSubjects() {
    return await this._loadSubjects()
  }

  async createSubject(subject) {
    const subjects = await this._loadSubjects()

    const newSubject = {
      id: crypto.randomBytes(8).toString("hex"),
      ...subject,
    }

    subjects.push(newSubject)

    await fs.writeFile(this.subjectDataPath, JSON.stringify(subjects))
    return newSubject
  }

  async updateSubject(subject) {
    const subjects = await this._loadSubjects()
    const index = subjects.findIndex((c) => c.id === subject.id)

    if (index < 0)
      throw new Error(`Předmět s identifikátorem ${subject.id} neexistuje`)

    subjects[index] = {
      ...subjects[index],
      ...subject,
    }

    await fs.writeFile(this.subjectDataPath, JSON.stringify(subjects))
    return subject
  }

  async deleteSubject(id) {
    const subjects = await this._loadSubjects()
    const index = subjects.findIndex((c) => c.id === id)

    if (index < 0) throw new Error(`Předmět s identifikátorem ${id} neexistuje`)

    subjects.splice(index, 1)

    await fs.writeFile(this.subjectDataPath, JSON.stringify(subjects))
  }

  async _loadSubjects() {
    const data = await fs.readFile(this.subjectDataPath)
    return JSON.parse(data)
  }
}

module.exports = SubjectDao
