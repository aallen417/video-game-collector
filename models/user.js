import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  myGames: [{type: Schema.Types.ObjectId, ref: "Game"}],
  // owner: {type: Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
})

const User = mongoose.model("User", userSchema)

export {
  User
}