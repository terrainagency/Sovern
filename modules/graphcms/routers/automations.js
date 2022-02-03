import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {


        if(req.method == 'GET'){
            return await getByWorkflowID(req.identity.id, req.url.replace(/^\/+/g, ''), res)
            // if(req.url == '/listing/user') {
            //     // return await getAutomationsByUser(req.identity.id, res)
            // } else {
            //     // return await getWorkflowByID(req.identity.id, req.url.replace(/^\/+/g, ''), res)
            // }
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

    async function getByWorkflowID(gID, workflowID, res){
        const variables = {
            workflowID: workflowID,
            gID: gID
        }

        sendJSON(await apis.automations.getByWorkflowID(variables), res)
    }

    async function createAutomation(identity, body, res){
        const variables = {
            ... body,
            gID: identity
        }

        if(variables.reference !== null){
            sendJSON(await apis.automations.createWithReference(variables), res)
        }
        else if(variables.preset !== null){
            sendJSON(await apis.automations.createWithPreset(variables), res)
        }
    }
}