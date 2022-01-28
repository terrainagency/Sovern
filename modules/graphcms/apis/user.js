import { gql } from 'graphql-request'
import { getGraphQLClient } from "../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)

    return {
        create: async (identity) => {
            const mutation = gql`
                    mutation AddCreator(
                        $gID: String!,
                        $name: String!, 
                        $email: String!, 
                        $image: String!, 
                        $joined: String!
                    ){
                        createCreator(
                            data: {
                                gID: $gID
                                name: $name,
                                email: $email,
                                image: $image,
                                joined: $joined
                            }
                        ){
                            gID
                            name
                            email
                            image
                            joined
                        }
                        publishCreator(where: {gID: $gID}){ 
                            gID 
                        }
                    }
                `
                const variables = {
                    gID: identity.id,
                    name: identity.name,
                    email: identity.email,
                    image: identity.image || '',
                    joined: new Date().toISOString()
                }
                const data = await graphcms.request(mutation, variables)
                return data
        },
        getByID: async (identityId) => {
            const query = gql`
                query FindCreator($gID: String!) {
                    creator(where: {gID: $gID}) {
                        name
                        image
                    }
                }
            `
            const data = await graphcms.request(query, { gID: identityId })
            return data
        }
    }
}