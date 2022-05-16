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
        const {plate, email, init_date, finishe_date} = req.body

        const user = await User.findOneBy({
            email:email
        })
        console.log(user)
        if(!user) return res.status(404).json({
            message: 'User does exists'
        })
        if(user.vehicle!=-1) return res.status(405).json({
            message: 'User already has a rented vehicle'
        })

        const vehicle = await Vehicle.findOneBy({
            plate: plate
        })
        if(!vehicle) return res.status(406).json({
            message: 'Vehicle does exists'
        })
        if(vehicle.rent) return res.status(407).json({
            message: 'Car is rented'
        })
        vehicle.id_user = user.id
        vehicle.rent = true
        vehicle.init_date = init_date
        vehicle.finishe_date = finishe_date
        user.vehicle = vehicle.id
        await vehicle.save()
        await user.save()
        return res.json(user)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({
                message: error.message
            })
        }
    }
}

export const returnVehicle = async (req: Request, res: Response)=>{
    try {
        const {plate, email} = req.body

        const user = await User.findOneBy({
            email:email
        })
        if(!user) return res.status(404).json({
            message: 'User does exists'
        })
        if(user.vehicle==-1) return res.status(405).json({
            message: 'User does not have a rental vehicle'
        })

        const vehicle = await Vehicle.findOneBy({
            id_user: user.id
        })
        if(!vehicle) return res.status(406).json({
            message: 'Vehicle does exists'
        })
        vehicle.rent = false
        vehicle.id_user = -1
        user.vehicle = -1
        await vehicle.save()
        await user.save()
        return res.json(user)
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

export const getVehicle= async(req: Request, res: Response)=>{
    try {
        const { plate } = req.body
        const user = await Vehicle.findOneBy({
            plate: plate
        })
        if(!user) return res.status(404).json({
            message: 'Vehicle does exists'
        })
        res.json(user)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({
                message:error.message
            })
        }
    }
}

export const deleteVehicle = async (req: Request, res: Response)=>{
    try {
        const {plate} = req.body
        const result = await Vehicle.delete({plate: plate})
        if(result.affected === 0 ){
            res.status(404).json({
                message: 'Vehicle not found'
            })
        }
        return res.status(204).json({
            message: 'Vehicle removed'
        })
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({
                message:error.message
            })
        }
    }
}