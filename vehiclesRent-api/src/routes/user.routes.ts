import { Router } from "express"
import { createUser, getUsers, updateUser, deleteUser, getUser } from '../controllers/users.controller'
import { ensureAuth } from "../middleware"

const router = Router()

router.post('/users', ensureAuth, createUser)

router.post('/users/get_user', ensureAuth, getUser)

router.get('/users', ensureAuth, getUsers)

router.put('/users', ensureAuth, updateUser)

router.delete('/users', ensureAuth, deleteUser)

export default router