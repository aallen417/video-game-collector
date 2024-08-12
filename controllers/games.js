import { Game } from "../models/game.js"

async function index(req, res) {
  const games = await Game.find({})
  res.render("games/index")
  games
}

export {
  index
}