import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {
        if(req.method == 'POST'){
            if(hasBadBody(req)){
                return rejectHitBadRequest(res)
            }
            if(req.url === '/comment') {
                await createComment(req.identity, req.body, res)
            }
            else if(req.url === '/') {
                await createMoodboardImage(req.identity.id, req.body, res)
            }
            return
        }   
        rejectHitBadRequest(res)
    }

    async function createMoodboardImage(gID, body, res){
        const variables = {
            ... body,
        }
        
        sendJSON(await apis.moodboardImages.create(variables), res)
    }

    async function createComment(gID, body, res) {
        const variables = {
            ... body,
            gID
        }
        
        sendJSON(await apis.moodboardImages.createComment(variables), res)
    }
}