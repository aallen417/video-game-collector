import { Game } from "../models/game.js"

async function index(req, res) {
  const games = await Game.find({})
  res.render("games/index")
  games
}

function newGame(req, res) {
  res.render("games/new")
}

export {
  index,
  newGame as new
}