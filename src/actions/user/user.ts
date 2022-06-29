import { User } from "./user.model.interface"

let users:User[] = []

export const getUsers = (): User[] => {
    return users
}

export const addUser = (userData: any): void => {
    const user = {
        name: userData.name,
        rol: userData.rol
    }
    users.push(user)
}

export const removeUserAction = (userRol: string): void => {
    users = users.filter((user) => {  
        return user.rol !== userRol
    })
}
