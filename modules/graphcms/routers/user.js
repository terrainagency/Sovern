import { sendJSON } from '../helpers'

export default (apis) => {
    return async function getUserRoute(req, res, next) {
        const identity = req.identity
        const userData = await apis.user.getByID(identity.id)

        if(userData.creator) {
            sendJSON(userData, res)
            return
        }

        sendJSON(apis.user.create(req.identity), res)
        next()
    }
}