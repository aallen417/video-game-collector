import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as usersCtrl from '../controllers/users.js'

const router = Router()

// public routes
router.get('/:userId', usersCtrl.show)

// protected routes
router.get('/', isSignedIn, usersCtrl.index)

// GET /:userId/myCollection
router.get("/:userId/myCollection", isSignedIn, usersCtrl.myCollectionIndex)

// POST /:userId/myCollection
router.post("/:userId/myCollection", isSignedIn, usersCtrl.addToCollection)

// DELETE /:userId/myCollection/:gameId
router.delete("/:userId/myCollection/:gameId", isSignedIn, usersCtrl.delete)

export { router }
