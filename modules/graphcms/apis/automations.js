import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        createWithReference: async (variables) => {
            const mutation = gql`
                mutation CreateAutomation(
                    $gID: String!
                    $title: String!
                    $timing: String!
                    $when: When!
                    $type: AutomationType!
                    $workflowID: ID!
                    $referenceID: ID!
                ){
                    createAutomation(
                        data: {
                            creator: {
                                connect: {
                                    gID: $gID
                                }
                            }
                            workflow: {
                                connect: {
                                    id: $workflowID
                                }
                            }
                            reference: {
                                connect: {
                                    id: $referenceID
                                }
                            }
                            title: $title
                            type: $type
                            timing: $timing
                            when: $when
                        }
                    ){
                        id
                    }
                }
            `
            let data = await graphcms.request(mutation, variables)
                
            let publish = await graphcms.request(
                gql`mutation PublishAutomation($id: ID){ publishAutomation(where: { id: $id }) {id} }`, 
                { id: data.createAutomation.id }
            )

            return data
        },
        createWithPreset: async (variables) => {
            const mutation = gql`
                mutation CreateAutomation(
                    $gID: String!
                    $title: String!
                    $timing: String!
                    $when: When!
                    $type: AutomationType!
                    $workflowID: ID!
                    $preset: AutomationPreset!
                ){
                    createAutomation(
                        data: {
                            creator: {
                                connect: {
                                    gID: $gID
                                }
                            }
                            workflow: {
                                connect: {
                                    id: $workflowID
                                }
                            }
                            title: $title
                            type: $type
                            timing: $timing
                            when: $when
                            preset: $preset
                        }
                    ){
                        id
                    }
                }
            `
            let data = await graphcms.request(mutation, variables)
                
            let publish = await graphcms.request(
                gql`mutation PublishAutomation($id: ID){ publishAutomation(where: { id: $id }) {id} }`, 
                { id: data.createAutomation.id }
            )

            return data
        },
        getByWorkflowID: async (variables) => {
            const query = gql `
                query getAutomationsByWorkflowID(
                    $workflowID: ID!
                ){
                    automations(where: {workflow: { id: $workflowID } }) {
                        id
                        title
                        type
                        reference {
                            id
                            title
                        }
                        preset
                    }
                }
            `
            let data = await graphcms.request(query, variables)
            return data.automations
        },
        destroyByID: async (variables) => {
            
        }
    }
}