import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as usersCtrl from '../controllers/users.js'

const router = Router()

// public routes
router.get('/:userId', usersCtrl.show)

// protected routes
router.get('/', isSignedIn, usersCtrl.index)

// POST /:userId/
router.post("/:userId/", isSignedIn, usersCtrl.addToCollection)

// DELETE /:userId/:gameId
router.delete("/:userId/:gameId", isSignedIn, usersCtrl.delete)

export { router }
