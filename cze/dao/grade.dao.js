const fs = require("fs/promises")
const path = require("path")
const crypto = require("crypto")

const DEFAULT_DATA_PATH = path.join(__dirname, "data", "grades.json")

class GradeDao {
  constructor(dataPath) {
    this.gradeDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH
  }

  async getGrade(id) {
    const grades = await this._loadGrades()
    return grades.find((grade) => grade.id === id)
  }

  async listGrades() {
    return await this._loadGrades()
  }

  async createGrade(grade) {
    const grades = await this._loadGrades()

    const newGrade = {
      id: crypto.randomBytes(8).toString("hex"),
      ...grade,
    }

    grades.push(newGrade)

    await fs.writeFile(this.gradeDataPath, JSON.stringify(grades))
    return newGrade
  }

  async updateGrade(grade) {
    const grades = await this._loadGrades()
    const index = grades.findIndex((c) => c.id === grade.id)

    if (index < 0)
      throw new Error(`Známka s identifikátorem ${grade.id} neexistuje`)

    grades[index] = {
      ...grades[index],
      ...grade,
    }

    await fs.writeFile(this.gradeDataPath, JSON.stringify(grades))
    return grade
  }

  async deleteGrade(id) {
    const grades = await this._loadGrades()
    const index = grades.findIndex((c) => c.id === id)

    if (index < 0) throw new Error(`Známka s identifikátorem ${id} neexistuje`)

    grades.splice(index, 1)

    await fs.writeFile(this.gradeDataPath, JSON.stringify(grades))
  }

  async _loadGrades() {
    const data = await fs.readFile(this.gradeDataPath)
    return JSON.parse(data)
  }
}

module.exports = GradeDao
