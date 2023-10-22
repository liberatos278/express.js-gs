const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1, maxLength: 30 },
    shortName: { type: "string", minLength: 1, maxLength: 3 },
    description: { type: "string", minLength: 3, maxLength: 255 },
  },
  required: ["name", "shortName"],
}

module.exports = schema
