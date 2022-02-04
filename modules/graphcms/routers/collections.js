import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {


        if(req.method == 'GET'){
            if(req.url == '/listing') {
                return await getCollectionListing(req.identity.id, res)
            } else {
                return await getCollectionByID(req.identity.id, req.url.replace(/^\/+/g, ''), res)
            }
        }
        if(req.method == 'POST'){
            if(hasBadBody(req)){
                return rejectHitBadRequest(res)
            }
            await createCollection(req.identity.id, req.body, res)
            return
        }   
        rejectHitBadRequest(res)
    }

    async function getCollectionListing(gID, res){
        sendJSON(await apis.collections.getListing(gID), res)
    }

    async function getCollectionByID(gID, collectionID, res){
        const variables = {
            collectionID: collectionID,
            gID: gID
        }

        sendJSON(await apis.collections.getByID(variables), res)
    }
    
    async function createCollection(gID, body, res){
        const variables = {
            ... body,
            gID: gID
        }
        
        sendJSON(await apis.collections.create(variables), res)
    }
}