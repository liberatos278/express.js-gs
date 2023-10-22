const schema = {
  type: "object",
  properties: {
    subjectId: { type: "string" },
    studentId: { type: "string" },
    dateTs: { type: "string", format: "date-time" },
    grade: { type: "integer", minimum: 1, maximum: 5 },
    weight: { type: "number", enum: [0.5, 1, 2], default: 1 },
    description: { type: "string", maxLength: 255, minLength: 3 },
  },
  required: ["subjectId", "studentId", "dateTs", "grade"],
}

module.exports = schema
