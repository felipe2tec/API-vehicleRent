import { Router } from "express"
import { createVehicle, getVehicle, getVehicles, deleteVehicle, rentVehicle, returnVehicle } from '../controllers/vehicles.controller'
import { ensureAuth } from "../middleware"

const router = Router()

router.post('/vehicles', ensureAuth,createVehicle)

router.get('/vehicles', ensureAuth, getVehicles)

router.post('/users/get_vehicle', ensureAuth, getVehicle)

router.post('/vehicles/rent_vehicle', ensureAuth, rentVehicle)

router.post('/vehicles/return_vehicle', ensureAuth, returnVehicle)

router.delete('/vehicles', ensureAuth, deleteVehicle)

export default router