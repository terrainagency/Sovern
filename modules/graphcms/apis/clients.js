import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        create: async (variables) => {
            const mutation = gql`
                mutation AddClient(
                    $gID: String!,
                    $image: String!,
                    $firstName: String!, 
                    $lastName: String!, 
                    $pronouns: String!, 
                    $company: String!, 
                    $phone: String!,
                    $email: String!,
                ){
                    createClient(
                        data: {
                            creator: {
                                connect: {
                                    gID: $gID
                                }
                            }
                            image: $image
                            firstName: $firstName
                            lastName: $lastName
                            pronouns: $pronouns
                            company: $company
                            phone: $phone
                            email: $email
                        }
                    ){
                        id
                    }
                }
            `
            let data = await graphcms.request(mutation, variables)
                
            return await graphcms.request(
                gql`mutation PublishClient($id: ID){ publishClient(where: { id: $id }) {id} }`, 
                { id: data.createClient.id }
            )
        },
        getList: async function(gID) {
            const query = gql`
                query GetClientList(
                    $gID: String!
                ){
                    clients(where: {creator: {gID: $gID}}) {
                        id
                        firstName
                        lastName
                        email
                    }
                }
            `
            const data = await graphcms.request(query, {gID: gID})
            return data.clients
        }
    }
}