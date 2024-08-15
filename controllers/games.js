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
    const gameTitleInDatabase = await Game.findOne({ gameTitle: req.body.gameTitle })
    const releaseDateInDatabase = await Game.find({ releaseDate: req.body.releaseDate })
    const consoleInDatabase = await Game.findOne({ console: req.body.console })
    if (gameTitleInDatabase && releaseDateInDatabase && consoleInDatabase) {      
      return res.send("Game already exist, please enter a different game.")
    } else {
      const game = await Game.create(req.body)
      return res.redirect("/games")
    }  
  } catch (error) {
    console.log(error)
    res.redirect("/games/new")
  }
}
async function show(req, res) {
  const game = await Game.findById(req.params.gameId)
  .populate(["reviews.author"])
  res.render("games/show", {
    game
  })
}

async function createReview(req, res) {
try {
  const game = await Game.findById(req.params.gameId)
  req.body.author = req.session.user._id
  game.reviews.push(req.body)
  await game.save()
  res.redirect(`/games/${game._id}`)
} catch (error) {
  console.log(error)
  res.redirect("/games")
}
}

async function deleteReview(req, res) {
  try {
    const game = await Game.findById(req.params.gameId)
    game.reviews.remove({_id: req.params.reviewId})
    await game.save()
    res.redirect(`/games/${game._id}`)
  } catch (error) {
    console.log(error)
    res.redirect("/games")
  }
}

export {
  index,
  newGame as new,
  create,
  show,
  createReview,
  deleteReview
}