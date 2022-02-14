import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"
import { parseQuery, queryString } from "../../../utils/fetchUtils"


export default (apis) => {
    return async (req, res) => {
        if(req.method == 'GET'){

            let query = parseQuery(req.url)
            console.log(query)
            if(query.id) {
                return await getProjectByID(query.id, res)
            }
            else if(query.workflowId) {
                return await getProjectsByWorkflow(req.identity.id, query.workflowId, res)
            }
            
            // let urlStr = req.url.replace(/&id(=[^&]*)?/, '')
            // console.log(req.url.replace(/&id(=[^&]*)?/, ''))
            // if(urlStr === '/')
            // if(req.url.replace(/&id(=[^&]*)?/, '') === '/?id') {
            //     let id = req.url.replace('/tasks&id=', '')

            // }

            // if(req.url.replace(/&id(=[^&]*)?/, '') === '') {
            // }

            // if(req.url == '/listing') {
            //     return await getWorkflowsListing(req.identity.id, res)
            // }
            // else if(req.url.replace(/&id(=[^&]*)?/, '') === '/tasks') {
            //     return await getTasksByID(req.identity.id, req.url.replace('/tasks&id=', ''), res)
            // } 
            // else {
            //     return await getWorkflowByID(req.identity.id, req.url.replace(/^\/+/g, ''), res)
            // }



            // if(req.url == '/user/') {
            //     return await getProjectsByUser(req.identity.id, res) 
            // } else {
            //     return await getProjectsByWorkflow(req.identity.id, req.url.replace(/^\/+/g, ''), res)
            // }
            
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