const { AuthenticationError } = require('apollo-server');
const User = require("../../models/User")
const signToken = require('../../utils/signToken')

const loginUser = async (_, { input }, context) => {
  try {
    // check if user exists in db
    const user = await User.findOne({ email: input.email })
    if (!user) {
      console.log("[ERROR]: Failed to login. User does not exist.");
      throw new AuthenticationError("Failed to login.")
    }
    // check password
    const isValidPassword = await user.checkPassword(input.password)

    if (!isValidPassword) {
      console.log("[ERROR]: Failed to login. Incorrect password.");
      throw new AuthenticationError("Failed to login.")
    }

    return {
      token: signToken(user),
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        profileImage: user.profileImage,
        savedCharacters: user.savedCharacters,
        createdCharacters: user.createdCharacters
      }
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);
    throw new AuthenticationError("Failed to login.");
  }
}

module.exports = loginUser