import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {
        if(req.method == 'GET'){
            if(req.url == '/list') {
                return await getMoodboardList(req.identity.id, res)
            } else {
                return await getMoodboardByID(req.identity.id, req.url.replace(/^\/+/g, ''), res)
            }
        }
        if(req.method == 'POST'){
            if(hasBadBody(req)){
                return rejectHitBadRequest(res)
            }
            await createMoodboard(req.identity.id, req.body, res)
            return
        }   
        rejectHitBadRequest(res)
    }

    async function getMoodboardList(gID, res){

        sendJSON(await apis.moodboards.getList(gID), res)
    }

    async function getMoodboardByID(gID, moodboardID, res){
        const variables = {
            moodboardID: moodboardID,
            gID: gID
        }

        sendJSON(await apis.moodboards.getByID(variables), res)
    }

    
    async function createMoodboard(gID, body, res){
        const variables = {
            ... body,
            gID: gID
        }
        
        sendJSON(await apis.moodboards.create(variables), res)
    }
}