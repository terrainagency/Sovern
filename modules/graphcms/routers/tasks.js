import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {
        if(req.method == 'POST'){
            if(hasBadBody(req)){
                return rejectHitBadRequest(res)
            }

            await updateTask(req.identity.id, req.body, res)
            return
        }   
        rejectHitBadRequest(res)
    }

    async function updateTask(gID, body, res){        
        const variables = {
            ... body,
        }

        sendJSON(await apis.tasks.update(variables), res)
    }
}