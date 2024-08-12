import mongoose from "mongoose"

const Schema = mongoose.Schema

const gameSchema = new Schema({
  gameTitle: {
    type: String
  },
  releaseDate: {
    type: Number,
    min: 1972
  },
  console: {
    type: String,
    enum: ["Xbox, PS3, Switch"]
  }
})

const Game = mongoose.model("Game", gameSchema)

export {
  Game
}