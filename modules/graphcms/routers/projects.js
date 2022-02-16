import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"
import { parseQuery } from "../../../utils/fetchUtils"


export default (apis) => {
    return async (req, res) => {
        if(req.method == 'GET'){
            let query = parseQuery(req.url)

            if(query.id) {
                return await getProjectByID(query.id, res)
            }

            else if(query.workflowId) {
                return await getProjectsByWorkflow(req.identity.id, query.workflowId, res)
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

    async function getProjectByID(id, res) {
        sendJSON(await apis.projects.getByID(id), res)
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