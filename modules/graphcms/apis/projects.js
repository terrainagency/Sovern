import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        create: async (variables) => {
            const mutation = gql`
                mutation AddProject(
                    $gID: String!,
                    $address: String!, 
                    $startTime: String!, 
                    $endTime: String!, 
                    $price: String!, 
                    $latitude: Float!,
                    $longitude: Float!
                ){
                    createProject(
                        data: {
                            creator: {
                                connect: {
                                    gID: $gID
                                }
                            }
                            address: $address, 
                            startTime: $startTime, 
                            endTime: $endTime, 
                            price: $price, 
                            geoLocation: {
                                latitude: $latitude,
                                longitude: $longitude,
                            }
                        }
                    ){
                        id
                    }
                }
            `
            return await graphcms.request(mutation, variables)
        },
        getByUserID: async function(gID) {
            const query = gql`
                query FindProjectsByCreator(
                    $gID: String!
                ){
                    projects(where: {creator: {gID: $gID}}) {
                        id
                        title
                        moodboard {
                            id
                            images(first: 2) {
                                url
                            }
                        }
                        clients {
                            id
                            name
                        }
                        address
                        geoLocation {
                            latitude
                            longitude
                        }
                        startTime
                        endTime
                        price
                    }
                }
            `
            const variables = { gID: gID }
            let data = await graphcms.request(query, variables)
            return data.projects
        },
        getByWorkflowID: async function(variables) {
            const query = gql`
                query FindProjectsByWorkflow($gID: String!, $workflowID: ID!) {
                    projects(where: { creator: {gID: $gID}, workflow: {id: $workflowID}}) {
                        id
                        title
                        clients {
                            id
                            name
                        }
                        address
                        tasks {
                            id
                            title
                            automation {
                                id
                            }
                            condition
                        }
                        startTime
                        price
                    }
                }
            `
            let data = await graphcms.request(query, variables)
            console.log(data)
            return data.projects
        },
        // getByID: async function(id) {
        //     const query = gql`
        //         query FindProjectsByCreator(
        //             $ID: String!
        //         ){
        //             project(where: {id: $ID}) {
        //                 id
        //                 title
        //                 moodboard {
        //                     moodboardImages {
        //                         url
        //                     }
        //                 }
        //                 clients {
        //                     id
        //                     name
        //                 }
        //                 startTime
        //                 price
        //             }
        //         }
        //     `
        //     const variables = { id: id }
        //     let data = await graphcms.request(query, variables)
        //     return data.project
        // },
    }
}