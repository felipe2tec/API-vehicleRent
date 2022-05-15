import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {AppDataSource} from './db'
import userRoutes from './routes/user.routes'

const app  = express()

app.use(morgan('dev'))

app.use(cors())

app.use(express.json())

app.use(userRoutes)

async function main(){
    try {
        await AppDataSource.initialize()
        console.log('Database connected')
        app.listen(3100,()=>{
            console.log('Server is running on port 3100')
        })
    } catch (error) {
        console.log(error)
    }
    
}

main()