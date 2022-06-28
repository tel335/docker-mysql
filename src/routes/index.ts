import Router from 'koa-router'
import getHealth from '../routes/health/health'
import { getAllUsers, createUser, removeUser } from './user/user'

const router = new Router()

router.get('/health', getHealth)
router.get('/api/users', getAllUsers)
router.put('/api/user', createUser)
router.delete('/api/user/:rol', removeUser)

export default router
