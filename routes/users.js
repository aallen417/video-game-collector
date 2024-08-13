import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as usersCtrl from '../controllers/users.js'

const router = Router()

// public routes
router.get('/:userId', usersCtrl.show)

// protected routes
router.get('/', isSignedIn, usersCtrl.index)

// GET /users/:userId/myCollection
router.get("/:userId/myCollection", isSignedIn, usersCtrl.myCollectionIndex)

// POST /users/:userId/myCollection
router.post("/:userId/myCollection", isSignedIn, usersCtrl.addToCollection)

export { router }
