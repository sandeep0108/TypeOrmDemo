import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "tops12345",
    database: "type_orm_demo",
    synchronize: false,
    logging: false,    
    entities: [User],
    migrations: [],
    subscribers: [],

})
