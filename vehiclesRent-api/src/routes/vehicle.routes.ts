import { Router } from "express"
import { createVehicle, getVehicles } from '../controllers/vehicles.controller'
import { ensureAuth } from "../middleware"

const router = Router()

router.post('/vehicles', ensureAuth,createVehicle)

router.get('/vehicles', ensureAuth, getVehicles)

router.put('/vehicles', ensureAuth)

router.delete('/vehicles', ensureAuth)

export default router