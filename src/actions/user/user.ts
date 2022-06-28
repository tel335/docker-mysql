import { User } from "./user.model.interface"

let users:User[] = []

export const getUsers = () => {
    return users
}

export const addUser = (userData: any) => {
    const user = {
        name: userData.name,
        rol: userData.rol
    }
    users.push(user)
}

export const removeUserAction = (userRol: string) => {
    users = users.filter((user) => {  
        return user.rol !== userRol
    })
}
