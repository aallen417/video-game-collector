import { Game } from "../models/game.js"
import { User } from "../models/user.js"

async function index(req, res) {
  try {
    const users = await User.find({})
    res.render('users/index', {
      users
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function show(req, res) {
  try {
    const selectedUser = await User.findById(req.params.userId)
    res.render('users/show', {
      selectedUser
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function myCollectionIndex(req, res) {
  const user = await User.findById(req.params.userId)
  .populate("myGames")
  const myGames = await Game.find({_id: {$nin: user.myGames}})
  res.render("mycollection/index", {
    user,
    myGames
  })
}

async function addToCollection(req, res){
  try {
    const user = await User.findById(req.params.userId)
    user.myGames.push(req.body.gameId)
    await user.save()
    res.redirect(`/users/${user._id}/myCollection`)
  } catch (error) {
    console.log(error)
    res.redirect("/")  
  }
}

export {
  index,
  show,
  myCollectionIndex,
  addToCollection
}