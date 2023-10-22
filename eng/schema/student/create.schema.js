let schema = {
  type: "object",
  properties: {
    firstname: { type: "string", minLength: 1, maxLength: 50 },
    surname: { type: "string", minLength: 1, maxLength: 50 },
    nationalId: { type: "string", minLength: 10, maxLength: 10 },
    classroomId: { type: "string" },
  },
  required: ["firstname", "surname", "nationalId"],
}

module.exports = schema
