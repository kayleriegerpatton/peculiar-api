const { Schema, model } = require("mongoose");

const bcrypt = require('bcrypt')

const userSchema = {
  firstName: {
    type: String,
    required: true,
    maxLength: 100,
  },

  lastName: {
    type: String,
    required: true,
    maxLength: 100,
  },

  username: {
    type: String,
    required: true,
    maxLength: 50,
    unique: [true, "Username {VALUE} is not unique."]
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: [true, "Email {VALUE} is not unique"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "{VALUE} is not a valid email address."]
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
    match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "{VALUE} does not meet the password requirements."] // match at least 1: uppercase, lowercase, number, and special character
  },

  profileImage: {
    type: String,
    default: "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"
  },

  savedCharacters: [{
    type: Schema.Types.ObjectId,
    ref: "Character",
    required: false
  }],

  createdCharacters: [{
    type: Schema.Types.ObjectId,
    ref: "Character",
    required: false
  }]
}

const schema = new Schema(userSchema, {
  id: true,
  toJSON: { getters: true },
})

// before save, hash the password
schema.pre("save", async function (next) {
  if(this.isNew || this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})

// schema method to check password at login
schema.methods.checkPassword = async function(password){
  return bcrypt.compare(password, this.password)
}

const User = model("User", schema)

module.exports = User