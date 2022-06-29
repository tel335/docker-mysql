import { Context } from 'koa'
import { getUsers, addUser, removeUserAction } from '../../actions/user/user'

export const getAllUsers = async (ctx:Context) => {
    ctx.body = await getUsers() // UserModel[]
    return ctx
}

export const createUser = async (ctx:Context) => {
    await addUser(ctx.request.body)
    ctx.body = { message: 'User was created' }
    return ctx
}

export const removeUser = async (ctx:Context) => {
    await removeUserAction(ctx.params.rol)
    ctx.body = { message: 'User was removed' }
    return ctx
}
