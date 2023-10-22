const schema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string", minLength: 1, maxLength: 30 },
    shortName: { type: "string", minLength: 1, maxLength: 3 },
    description: { type: "string", minLength: 3, maxLength: 255 },
  },
  required: ["id"],
}

module.exports = schema
