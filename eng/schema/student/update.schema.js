let schema = {
  type: "object",
  properties: {
    id: { type: "string" },
    firstname: { type: "string", minLength: 1, maxLength: 50 },
    surname: { type: "string", minLength: 1, maxLength: 50 },
    nationalId: { type: "string", minLength: 10, maxLength: 10 },
    classroomId: { type: "string" },
  },
  required: ["id"],
}

module.exports = schema
