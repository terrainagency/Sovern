import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        create: async (variables) => {
            const create = gql`
                mutation CreateAutomation(
                    $gID: String!
                    $title: String!
                    $fields: JSON!
                    $timing: DateTime!
                    $when: String!
                    $reference: JSON!
                ){
                    createAutomation(
                        data: {
                            creator: {
                                connect: {
                                    gID: $gID
                                }
                            }
                            title: $title
                            type: $type
                            fields: $fields
                            timing: $timing
                            when: $when
                            reference: $reference
                        }
                    ){
                        id
                    }
                }
            `
            let data = await graphcms.request(create, variables)
                
            let publish = await graphcms.request(
                gql`mutation PublishAutomation($id: ID){ publishAutomation(where: { id: $id }) {id} }`, 
                { id: data.createAutomation.id }
            )

            return data
        },
    }
}