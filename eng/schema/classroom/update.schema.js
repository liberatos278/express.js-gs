const schema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
      minLength: 3,
      maxLength: 30,
    },
  },
  required: ["id"],
}

module.exports = schema
