require("dotenv").config();
const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;
const expiration = "8h";

const verifyToken = ({ req }) => {
  let token = req.body.token || req.query.token || req.headers.authorization;
// get token from auth header
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    throw new AuthenticationError("Invalid token.");
  }

  return req;
};

module.exports = verifyToken