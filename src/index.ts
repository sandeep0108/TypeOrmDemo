import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Project started...")
    // console.log("Inserting a new user into the database...")
    //  const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

    const usersRepo = AppDataSource.getRepository(User);
    const users1 = await usersRepo.find()
    console.log("Loaded users by repository: ", users1)


    const [users2, usersCount] = await usersRepo.findAndCount()
    console.log("All users: ", users2)
    console.log("Users count: ", usersCount)

    // Update in the database
    const userToUpdate = await usersRepo.findOneBy({
        id: 4,
    })
    console.log('userToUpdate', userToUpdate)
    userToUpdate.firstName = "Me, my friends and polar bears"
    await usersRepo.save(userToUpdate)


    // Updated data
    const getUpdated = await usersRepo.findOneBy({
        id: 4,
    })
    console.log('getUpdated', getUpdated)

}).catch(error => console.log(error))
