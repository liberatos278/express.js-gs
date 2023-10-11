const fs = require("fs/promises")
const path = require("path")
const crypto = require("crypto")

const DEFAULT_DATA_PATH = path.join(__dirname, "data", "classrooms.json")

class ClassroomDao {
  constructor(dataPath) {
    this.classroomDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH
  }

  async getClassroom(id) {
    const classrooms = await this._loadClassrooms()
    return classrooms.find((classroom) => classroom.id === id)
  }

  async listClassrooms() {
    return await this._loadClassrooms()
  }

  async createClassroom(classroom) {
    const classrooms = await this._loadClassrooms()

    const newClassroom = {
      id: crypto.randomBytes(8).toString("hex"),
      ...classroom,
    }

    classrooms.push(newClassroom)

    await fs.writeFile(this.classroomDataPath, JSON.stringify(classrooms))
    return newClassroom
  }

  async updateClassroom(classroom) {
    const classrooms = await this._loadClassrooms()
    const index = classrooms.findIndex((c) => c.id === classroom.id)

    if (index < 0)
      throw new Error(`Classroom with given id ${classroom.id} does not exists`)

    classrooms[index] = {
      ...classrooms[index],
      ...classroom,
    }

    await fs.writeFile(this.classroomDataPath, JSON.stringify(classrooms))
    return classroom
  }

  async deleteClassroom(id) {
    const classrooms = await this._loadClassrooms()
    const index = classrooms.findIndex((c) => c.id === id)

    if (index < 0)
      throw new Error(`Classroom with given id ${id} does not exists`)

    classrooms.splice(index, 1)

    await fs.writeFile(this.classroomDataPath, JSON.stringify(classrooms))
  }

  async _loadClassrooms() {
    const data = await fs.readFile(this.classroomDataPath)
    return JSON.parse(data)
  }
}

module.exports = ClassroomDao
