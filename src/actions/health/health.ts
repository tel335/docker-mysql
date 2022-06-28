import { Health } from './health.model.interface'

export function getHealthAction():Health {
    const healthResponse: Health = { message: 'ok' }
    return healthResponse
}
