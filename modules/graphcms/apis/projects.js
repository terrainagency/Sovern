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
                        clients {
                            id
                            name
                        }
                        startTime
                        price
                    }
                }
            `
            const variables = { gID: gID }
            let data = await graphcms.request(query, variables)
            return data.projects
        },
    }
}