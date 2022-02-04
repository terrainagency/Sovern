import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        update: async (variables) => {
            console.log(variables)
            const mutation = gql`
                mutation UpdateTask(
                    $id: ID!
                    $condition: TaskStatus!
                ){
                    updateTask(
                        where: {
                            id: $id
                        }
                        data: {
                            condition: $condition
                        }
                    ){
                        id
                    }
                }
            `
            let data = await graphcms.request(mutation, variables)
                
            let publish = await graphcms.request(
                gql`mutation PublishTask($id: ID){ publishTask(where: { id: $id }) {id} }`, 
                { id: variables.id }
            )

            return data
        }
    }
}