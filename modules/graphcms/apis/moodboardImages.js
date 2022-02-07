import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        create: async (variables) => {
            const create = gql`
                mutation CreateMoodboardImage(
                    $moodboardID: ID
                    $url: String!

                ){
                    createMoodboardImage(
                        data: {
                            moodboard: {
                                connect: {
                                    id: $moodboardID
                                }
                            }
                            url: $url
                        }
                    ){
                        id
                        moodboard {
                            id
                        }
                    }
                }
            `
            let data = await graphcms.request(create, variables)

            console.log(data)
                
            let publish = await graphcms.request(
                gql`mutation PublishMoodboardImage($id: ID){ publishMoodboardImage(where: { id: $id }) {id} }`, 
                { id: data.createMoodboardImage.id }
            )
            let publishMoodboard = await graphcms.request(
                gql`mutation PublishMoodboard($id: ID){ publishMoodboard(where: { id: $id }) {id} }`, 
                { id: data.createMoodboardImage.moodboard.id }
            )

            return data
        },
        createComment: async (variables) => {
            const mutation = gql`
                query addCommentToImage(
                    $comment: String!
                    $locationX: Float!
                    $locationY: Float!
                    $gID: String!
                    $imageID: ID!
                ){
                    mutation createComment(
                        data: {
                            creator: { connect: { gID: $gID } }
                            image: { connect: { id: $imageID } }
                            comment: $comment
                            locationX: $locationX
                            locationY: $locationY
                        } 
                    ){
                        id
                    }
                }
            `
            const data = await graphcms.request(mutation, variables)

            let publish = await graphcms.request(
                gql`mutation PublishComment($id: ID){ publishComment(where: { id: $id }) {id} }`, 
                { id: data.addCommentToImage.id }
            )

            return
        }
    }
}