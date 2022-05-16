import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {AppDataSource} from './db'
import userRoutes from './routes/user.routes'
import vehicleRoute from './routes/vehicle.routes'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

const app  = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(morgan('dev'))

app.use(cors())

app.use(express.json())

app.use(userRoutes)

app.use(vehicleRoute)

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