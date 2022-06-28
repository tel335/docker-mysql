import { Context } from "koa"
import { getHealthAction } from '../../actions/health/health'

export default function getHealth(ctx:Context):void {
    ctx.body = getHealthAction()
}