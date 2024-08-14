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
  .populate("myGames")
  const myGames = await Game.find({_id: {$nin: selectedUser.myGames}})
    res.render('users/show', {
      selectedUser,
      myGames
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function myCollectionIndex(req, res) {
  const selectedUser = await User.findById(req.params.userId)
  .populate("myGames")
  const myGames = await Game.find({_id: {$nin: selectedUser.myGames}})
  res.render("mycollection/index", {
    selectedUser,
    myGames
  })
}

async function deleteFromCollection(req, res) {
  try {
    const user = await User.findById(req.params.userId)
    user.myGames.remove({_id: req.params.gameId})
    await user.save()
    res.redirect(`/users/${user._id}`)
  } catch (error) {
    const user = await User.findById(req.params.userId)
    console.log(error)
    res.redirect(`/users/`)
  }
}
async function addToCollection(req, res){
  try {
    const user = await User.findById(req.params.userId)
    user.myGames.push(req.body.gameId)
    await user.save()
    res.redirect(`/users/${user._id}`)
  } catch (error) {
    console.log(error)
    res.redirect("/")  
  }
}

export {
  index,
  show,
  myCollectionIndex,
  addToCollection,
  deleteFromCollection as delete
}