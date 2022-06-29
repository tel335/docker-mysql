import { UserModel } from "../../model/UserModel"
import { AppDataSource } from "../../database/index"

const userRepository = AppDataSource.getRepository(UserModel)

export const getUsers = async (): Promise<UserModel[]> => {
    return await userRepository.find()
}

export const addUser = async (userData: any) => {
    const user = {
        name: userData.name,
        rol: userData.rol
    }
    await userRepository.save(user)
}

export const removeUserAction = async (userRol: string) => {
    await userRepository.delete({ rol: userRol })  // DELETE FROM user_model WHERE rol = userRol;
}
