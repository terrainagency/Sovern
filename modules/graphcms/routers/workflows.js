import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {


        if(req.method == 'GET'){
            if(req.url == '/listing/user') {
                return await getWorkflowsByUser(req.identity.id, res)
            } else {
                return await getWorkflowByID(req.identity.id, req.url.replace(/^\/+/g, ''), res)
            }
        }
        // if(req.method == 'GET' && req.url == '/'){
        //     console.log(req.url)
        //     console.log("GET WORKFLOW BY ID")


        //     // return await getWorkflowByID(req.identity.id, res)
        // }
        if(req.method == 'POST'){
            if(hasBadBody(req)){
                return rejectHitBadRequest(res)
            }
            await createWorkflow(req.identity.id, req.body, res)
            return
        }   
        rejectHitBadRequest(res)
    }

    async function getWorkflowsByUser(gID, res){
        sendJSON(await apis.workflows.getListingByUserID(gID), res)
    }

    async function getWorkflowByID(gID, workflowID, res){
        const variables = {
            workflowID: workflowID,
            gID: gID
        }

        sendJSON(await apis.workflows.getWorkflowByID(variables), res)
    }

    async function createWorkflow(identity, body, res){
        const variables = {
            ... body,
            gID: identity
        }
        
        sendJSON(await apis.workflows.create(variables), res)
    }
}