import { Router } from "express"
import { isSignedIn } from "../middleware/is-signed-in.js"
import * as gamesCtrl from "../controllers/games.js"

const router = Router()


// GET /games
router.get("/", gamesCtrl.index)

// GET /games/new (protected route)
router.get("/new", isSignedIn, gamesCtrl.new)

// GET /games/:gameId (protected route)
router.get("/:gameId", isSignedIn, gamesCtrl.show)

// GET /games/:gameId/:reviewId/edit
router.get("/:gameId/:reviewId/edit", isSignedIn, gamesCtrl.editReview)

// POST /games (protected route)
router.post("/", isSignedIn, gamesCtrl.create)

// POST /games/:gameId/reviews
router.post("/:gameId/reviews", isSignedIn, gamesCtrl.createReview)

// PUT /games/:gameId/:reviewId
router.put("/:gameId/:reviewId", isSignedIn, gamesCtrl.updateReview)

// DELETE /games/:gameId/:reviewId
router.delete("/:gameId/:reviewId", isSignedIn, gamesCtrl.deleteReview)

export { router }