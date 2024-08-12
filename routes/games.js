import { Router } from "express"
import { isSignedIn } from "../middleware/is-signed-in.js"
import * as gamesCtrl from "../controllers/games.js"

const router = Router()

//// Public Routes
// GET /games
router.get("/", gamesCtrl.index)

////Protected Routes
// GET /games/new
router.get("/new", isSignedIn, gamesCtrl.new)

// POST /games
router.post("/", isSignedIn, gamesCtrl.create)

export { router }