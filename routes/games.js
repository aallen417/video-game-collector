import { Router } from "express"
import { isSignedIn } from "../middleware/is-signed-in.js"
import * as gamesCtrl from "../controllers/games.js"

const router = Router()


// GET /games
router.get("/", gamesCtrl.index)

// GET /games/new (protected route)
router.get("/new", isSignedIn, gamesCtrl.new)

// GET /games/:gameId
router.get("/:gameId", gamesCtrl.show)

// POST /games (protected route)
router.post("/", isSignedIn, gamesCtrl.create)

export { router }