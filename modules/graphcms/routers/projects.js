import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"

export default (apis) => {
    return async (req, res) => {
        if(req.method == 'GET'){
            if(req.url == '/user/') {
                return await getProjectsByUser(req.identity.id, res)
            } else {
                return await getProjectsByWorkflow(req.identity.id, req.url.replace(/^\/+/g, ''), res)
            }
            
        }
        if(req.method == 'POST'){
            if(hasBadBody(req)){
                return rejectHitBadRequest(res)
            }
            await createProject(req.identity, req.body, res)
            return
        }   
        rejectHitBadRequest(res)
    }

    async function getProjectsByUser(gID, res){
        sendJSON(await apis.projects.getByUserID(gID), res)
    }

    async function getProjectsByWorkflow(gID, workflowID, res) {
        const variables = {
            workflowID: workflowID,
            gID: gID
        }
        sendJSON(await apis.projects.getByWorkflowID(variables), res)
    }

    async function createProject(identity, body, res){
        const variables = {
            ... body,
            gID: identity.id
        }
        sendJSON(await apis.projects.create(variables), res)
    }
}