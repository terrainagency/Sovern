import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {


        if(req.method == 'GET'){
            if(req.url == '/listing') {
                return await getWorkflowsListing(req.identity.id, res)
            }
            else if(req.url.replace(/&id(=[^&]*)?/, '') === '/tasks') {
                return await getTasksByID(req.identity.id, req.url.replace('/tasks&id=', ''), res)
            } 
            else {
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

    async function getWorkflowsListing(gID, res){
        sendJSON(await apis.workflows.getListings(gID), res)
    }

    async function getWorkflowByID(gID, workflowID, res){
        const variables = {
            workflowID: workflowID,
            gID: gID
        }

        sendJSON(await apis.workflows.getWorkflowByID(variables), res)
    }
    async function getTasksByID(gID, workflowID, res){
        const variables = {
            workflowID: workflowID,
            gID: gID
        }

        sendJSON(await apis.workflows.getTasksByID(variables), res)
    }

    async function createWorkflow(identity, body, res){
        const variables = {
            ... body,
            gID: identity
        }
        
        sendJSON(await apis.workflows.create(variables), res)
    }
}