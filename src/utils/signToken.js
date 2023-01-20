require("dotenv").config()
const jwt = require('jsonwebtoken')

const secret = process.env.SECRET;
const expiration = "8h";

// take signin payload, pass to jwt to create token with 8hr expiration time
const signToken = ({ firstName, lastName, email, username, id }) => {
  const payload = { firstName, lastName, email, username, id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = signToken