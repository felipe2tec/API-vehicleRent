import { Request, Response} from 'express'
import { Vehicle } from "../entities/Vehicle"
import { User } from '../entities/User'

export const createVehicle = async(req: Request,res: Response)=>{
    try {
        const { plate, model, rent, daily_price, init_date, finishe_date, id_user} = req.body
        const vehicle = new Vehicle()
        vehicle.plate = plate
        vehicle.model = model
        vehicle.rent = rent
        await vehicle.save()
        res.json(vehicle)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({
                message:error.message
            })
        }
    }
}

export const rentVehicle = async (req: Request, res: Response)=>{
    try {
        const {plate, id_user, init_date, finishe_date} = req.body

        const user = await User.findOneBy({
            id:id_user
        })
        if(!user) return res.status(404).json({
            message: 'User does exists'
        })

        const vehicle = await Vehicle.findOneBy({
            plate: plate
        })
        if(!vehicle) return res.status(404).json({
            message: 'Vehicle does exists'
        })
        vehicle.id_user = id_user
        vehicle.init_date = init_date
        vehicle.finishe_date = finishe_date
        await vehicle.save()
        return res.sendStatus(204)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({
                message: error.message
            })
        }
    }
}

export const getVehicles = async(req: Request, res: Response)=>{
    try {
        const vehicles = await Vehicle.find()
        res.json(vehicles)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({
                message:error.message
            })
        }
    }
}