import "reflect-metadata"

import koa from 'koa'
import bodyParser from 'koa-body'
import router from './routes/index'

import { AppDataSource } from './database/index'

const app = new koa()
const port = 3000

AppDataSource.initialize()
    .then(() => {
        console.log('Conexión a MYSQL creada')
    })
    .catch((error) => console.log(error))

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})
