import { Router } from "express"
import * as gamesCtrl from "../controllers/games.js"

const router = Router()

// GET /games
router.get("/", gamesCtrl.index)

// GET /games/new
router.get("/new", gamesCtrl.new)

export { router }