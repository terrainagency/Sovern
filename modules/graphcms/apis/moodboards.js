import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        create: async (variables) => {
            const create = gql`
                mutation CreateMoodboard(
                    $gID: String!
                    $title: String!
                    $isPrivate: Boolean!
                ){
                    createMoodboard(
                        data: {
                            creator: {
                                connect: {
                                    gID: $gID
                                }
                            }
                            title: $title
                            isPrivate: $isPrivate
                        }
                    ){
                        id
                    }
                }
            `
            let data = await graphcms.request(create, variables)
                
            let publish = await graphcms.request(
                gql`mutation PublishMoodboard($id: ID){ publishMoodboard(where: { id: $id }) {id} }`, 
                { id: data.createMoodboard.id }
            )

            return data
        },
        getByID: async function(variables) {
            const query = gql`
                query FindMoodboardByID(
                    $gID: String!
                    $moodboardID: ID
                ){
                    moodboards(where: {creator: {gID: $gID}, id: $moodboardID}) {
                        id
                        title
                        isPrivate
                        images {
                            id
                            url
                            comments {
                                creator {
                                    id
                                }
                                locationX
                                locationY
                            }
                        }
                    }
                }
            `
            return (await graphcms.request(query, variables)).moodboards[0]
        },
        getList: async function(gID) {
            const query = gql`
                query GetMoodboardList(
                    $gID: String!
                ){
                    moodboards(where: {creator: {gID: $gID}}) {
                        id
                        title
                        images(first: 6) {
                            id
                            url
                        }
                    }
                }
            `
            const data = await graphcms.request(query, {gID: gID})
            return data.moodboards
        }
    }
}