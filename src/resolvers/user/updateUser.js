const { ApolloError, AuthenticationError } = require('apollo-server')
const User = require("../../models/User")

// input is from the UI, user info is from the context
const updateUser = async (_, { input }, {user}) => {
  try {
    // if no user logged in, throw error
    if (!user) {
      throw new AuthenticationError("You must be logged in to update your user profile")
    }

    const updatedUser = await User.findByIdAndUpdate(user.id, { $set: { ...input } }, { returnDocument: "after" }) //should this be new:true?

    return updatedUser
  } catch (error) {
    console.log(`[ERROR]: Failed to update user | ${error.message}`);
    throw new ApolloError("Failed to update user.");
  }
}

module.exports = updateUser