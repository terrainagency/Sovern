import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        create: async (variables) => {
            const create = gql`
                mutation CreateWorkflow(
                    $gID: String!,
                    $title: String!
                ){
                    createWorkflow(
                        data: {
                            creator: {
                                connect: {
                                    gID: $gID
                                }
                            }
                            title: $title
                        }
                    ){
                        id
                    }
                }
            `
            let data = await graphcms.request(create, variables)
                
            let publish = await graphcms.request(
                gql`mutation PublishWorkflow($id: ID){ publishWorkflow(where: { id: $id }) {id} }`, 
                { id: data.createWorkflow.id }
            )

            return data
        },
        getListingByUserID: async function(gID) {
            const query = gql`
                query FindWorkflowsByCreator(
                    $gID: String!
                ){
                    workflows(where: {creator: {gID: $gID}}) {
                        id
                        title
                    }
                }
            `
            let data = await graphcms.request(query, { gID: gID})
            return data.workflows
        },
        getWorkflowByID: async function(variables) {
            const query = gql`
                query FindWorkflowsByID(
                    $gID: String!
                    $workflowID: ID
                ){
                    workflows(where: {creator: {gID: $gID}, id: $workflowID}) {
                        id
                        title
                        automations {
                            fields
                            id
                            title
                            type
                            timing
                            reference {
                              title
                            }
                        }
                    }
                }
            `
            let data = await graphcms.request(query, variables)
            return data.workflows[0]
        },
    }
}