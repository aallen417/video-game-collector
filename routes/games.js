import { Router } from "express"
import * as gamesCtrl from "../controllers/games.js"

const router = Router()

// GET /games
router.get("/", gamesCtrl.index)

export { router }