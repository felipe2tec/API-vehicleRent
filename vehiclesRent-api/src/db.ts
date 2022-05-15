import { DataSource } from "typeorm"
import { User } from './entities/User'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "apiuser",
    password: "pass1234",
    port: 5432,
    database: "vehiclesrent",
    entities: [User],
    logging:true,
    synchronize:true
})