import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: {
    type: String,
    enum: ["1/5", "2/5", "3/5", "4/5", "5/5"]
  },
  author: {type: Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
})

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
    enum: ["Xbox", "PS3", "Switch", "PC"]
  },
  reviews: [reviewSchema]  
})

const Game = mongoose.model("Game", gameSchema)

export {
  Game
}