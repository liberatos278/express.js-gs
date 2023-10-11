const fs = require("fs/promises")
const path = require("path")
const crypto = require("crypto")

const DEFAULT_DATA_PATH = path.join(__dirname, "data", "students.json")

class StudentDao {
  constructor(dataPath) {
    this.studentDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH
  }

  async getStudent(id) {
    const students = await this._loadStudents()
    return students.find((student) => student.id === id)
  }

  async listStudents() {
    return await this._loadStudents()
  }

  async createStudent(student) {
    const students = await this._loadStudents()

    const newStudent = {
      id: crypto.randomBytes(8).toString("hex"),
      ...student,
    }

    students.push(newStudent)

    await fs.writeFile(this.studentDataPath, JSON.stringify(students))
    return newStudent
  }

  async updateStudent(student) {
    const students = await this._loadStudents()
    const index = students.findIndex((c) => c.id === student.id)

    if (index < 0)
      throw new Error(`Student with given id ${student.id} does not exists`)

    students[index] = {
      ...students[index],
      ...student,
    }

    await fs.writeFile(this.studentDataPath, JSON.stringify(students))
    return student
  }

  async deleteStudent(id) {
    const students = await this._loadStudents()
    const index = students.findIndex((c) => c.id === id)

    if (index < 0)
      throw new Error(`Student with given id ${id} does not exists`)

    students.splice(index, 1)

    await fs.writeFile(this.studentDataPath, JSON.stringify(students))
  }

  async _loadStudents() {
    const data = await fs.readFile(this.studentDataPath)
    return JSON.parse(data)
  }
}

module.exports = StudentDao
