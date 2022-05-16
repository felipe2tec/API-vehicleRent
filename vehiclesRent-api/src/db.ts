import { DataSource } from "typeorm"
import { User } from './entities/User'
import { Vehicle } from "./entities/Vehicle"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "pass1234",
    port: 5432,
    database: "vehiclerent",
    entities: [User, Vehicle],
    logging:true,
    synchronize:true
})