import { Game } from "../models/game.js"

async function index(req, res) {
  const games = await Game.find({})
  res.render("games/index", {
    games
  })
}

function newGame(req, res) {
  res.render("games/new")
}

async function create(req, res) {
  try {
    const game = await Game.create(req.body)
    res.redirect("/games")
  } catch (error) {
    console.log(error)
    res.redirect("/games/new")
  }
}

async function show(req, res) {
  const game = await Game.findById(req.params.gameId)
  res.render("games/show", {
    game
  })
}

export {
  index,
  newGame as new,
  create,
  show,
}