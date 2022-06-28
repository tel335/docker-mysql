import { Context } from 'koa'
import { getUsers, addUser, removeUserAction } from '../../actions/user/user'

export const getAllUsers = (ctx:Context) => {
    ctx.body = getUsers()
    return ctx
}

export const createUser = (ctx:Context) => {
    addUser(ctx.request.body)
    ctx.body = { message: 'User was created' }
    return ctx
}

export const removeUser = (ctx:Context) => {
    removeUserAction(ctx.params.rol)
    ctx.body = { message: 'User was removed' }
    return ctx
}
