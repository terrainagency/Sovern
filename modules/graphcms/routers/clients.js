import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {
        if(req.method == 'GET'){
            if(req.url == '/list') {
                return await getClientList(req.identity.id, res)
            } else {
                // return await getClientByID(req.identity.id, req.url.replace(/^\/+/g, ''), res)
            }
        }
        if(req.method == 'POST'){
            if(hasBadBody(req)){
                return rejectHitBadRequest(res)
            }
            await createClient(req.identity.id, req.body, res)
            return
        }   
        rejectHitBadRequest(res)
    }

    async function getClientList(gID, res){
        sendJSON(await apis.clients.getList(gID), res)
    }

    async function createClient(gID, body, res){
        const variables = {
            ... body,
            gID: gID
        }
        
        sendJSON(await apis.clients.create(variables), res)
    }
}