import { DataSource } from "typeorm"
import { User } from './entities/User'
import { Vehicle } from "./entities/Vehicle"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "apiuser",
    password: "pass1234",
    port: 5432,
    database: "vehiclesrent",
    entities: [User, Vehicle],
    logging:true,
    synchronize:true
})