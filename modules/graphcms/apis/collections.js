import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        create: async (variables) => {
            const create = gql`
                mutation CreateCollection(
                    $gID: String!,
                    $title: String!
                ){
                    createCollection(
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
                gql`mutation PublishCollection($id: ID){ publishCollection(where: { id: $id }) {id} }`, 
                { id: data.createCollection.id }
            )

            return data
        },
        getListing: async function(gID) {
            const query = gql`
                query FindCollections(
                    $gID: String!
                ){
                    collections(where: {creator: {gID: $gID}}) {
                        id
                        title
                    }
                }
            `
            let data = await graphcms.request(query, { gID: gID})
            return data.collections
        },
        getByID: async function(variables) {
            const query = gql`
                query FindCollectionsByID(
                    $gID: String!
                    $collectionID: ID
                ){
                    collections(where: {creator: {gID: $gID}, id: $collectionID}) {
                        id
                        title
                        service {
                            id
                            title
                            moodboard {
                                id
                            }
                            workflow {
                                id
                            }
                            description {
                                raw
                            }
                            specs
                            pricingOptions
                            duration
                            timeSlots
                            isAvailable
                        }
                    }
                }
            `
            let data = await graphcms.request(query, variables)
            return data.collections[0]
        },
    }
}