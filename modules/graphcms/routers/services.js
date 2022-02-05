import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {
        if(req.method == 'POST'){
            if(hasBadBody(req)){
                return rejectHitBadRequest(res)
            }
            await createService(req.identity.id, req.body, res)
            return
        }   
        rejectHitBadRequest(res)
    }

    async function createService(gID, body, res){
        const variables = {
            ... body,
            gID: gID
        }
        
        sendJSON(await apis.services.create(variables), res)
    }
}