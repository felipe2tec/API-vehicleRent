import { Request, Response} from 'express'
import { User } from "../entities/User"


export const createUser = async(req: Request,res: Response)=>{
    try {
        const { email, passwd } = req.body
        const user = new User()
        user.email = email
        user.passwd = passwd
        await user.save()
        console.log(user)
        res.send('User')
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({
                message:error.message
            })
        }
    }
}

export const getUsers = async(req: Request, res: Response)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({
                message:error.message
            })
        }
    }
}

export const getUser = async(req: Request, res: Response)=>{
    try {
        const {id} = req.params
        const users = await User.findOneBy({id: parseInt(id)})
        res.json(users)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({
                message:error.message
            })
        }
    }
}

export const updateUser = async (req: Request, res: Response)=>{
    try {
        const {email, passwd} = req.body
        const {id} = req.params
        const user = await User.findOneBy({
            id: parseInt(req.params.id)
        })
        if(!user) return res.status(404).json({
            message: 'User does exists'
        })
        await User.update({id: parseInt(id)},req.body)
        return res.sendStatus(204)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({
                message: error.message
            })
        }
    }
}

export const deleteUser = async (req: Request, res: Response)=>{
    try {
        const {id} = req.params
        const result = await User.delete({id: parseInt(id)})
        if(result.affected === 0 ){
            res.status(404).json({
                message: 'User not found'
            })
        }
        return res.status(204)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({
                message:error.message
            })
        }
    }
}