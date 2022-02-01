import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {


        if(req.method == 'GET'){
            if(req.url == '/listing/user') {
                // return await getAutomationsByUser(req.identity.id, res)
            } else {
                // return await getWorkflowByID(req.identity.id, req.url.replace(/^\/+/g, ''), res)
            }
        }
        if(req.method == 'POST'){
            if(hasBadBody(req)){
                return rejectHitBadRequest(res)
            }
            await createAutomation(req.identity.id, req.body, res)
            return
        }   
        rejectHitBadRequest(res)
    }

    async function createAutomation(identity, body, res){
        const variables = {
            ... body,
            gID: identity
        }
        
        sendJSON(await apis.automations.create(variables), res)
    }
}