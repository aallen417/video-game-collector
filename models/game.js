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
    enum: ["PC", "PS5", "Xbox Series X/S", "Switch", "Xbox One", "PS4", "Wii U", "Wii", "PS3", "Xbox 360", "Xbox", "GameCube", "PS2", "Dreamcast", "N64", "PSOne", "SNES", "Genesis", "NES"]
  },
  reviews: [reviewSchema]  
})

const Game = mongoose.model("Game", gameSchema)

export {
  Game
}