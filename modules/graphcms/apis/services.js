import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        create: async (variables) => {
            const create = gql`
                mutation CreateService(
                    $gID: String!,
                    $collectionID: ID,
                    $title: String!
                ){
                    createService(
                        data: {
                            creator: {
                                connect: {
                                    gID: $gID
                                }
                            }
                            collection: {
                                connect: {
                                    id: $collectionID
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
                gql`mutation PublishService($id: ID){ publishService(where: { id: $id }) {id} }`, 
                { id: data.createService.id }
            )

            return data
        },
    }
}