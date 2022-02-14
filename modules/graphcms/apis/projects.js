import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        create: async (variables) => {
            const mutation = gql`
                mutation AddProject(
                    $gID: String!
                    $title: String!
                    $moodboard: ID!
                    $address: String!
                    $latitude: Float!
                    $longitude: Float!
                    $directions: String!
                    $timeZone: String!
                    $startTime: DateTime!
                    $endTime: DateTime!
                    $workflow: ID!
                    $price: Float!
                ){
                    createProject(
                        data: {
                            creator: { connect: { gID: $gID }}
                            title: $title
                            moodboard: { connect: { id: $moodboard }}
                            address: $address
                            geoLocation: { latitude: $latitude, longitude: $longitude }
                            directions: $directions
                            timeZone: $timeZone
                            startTime: $startTime
                            endTime: $endTime
                            workflow: { connect: { id: $workflow }}
                            price: $price
                            
                        }
                    ){
                        id
                    }
                }
            `
            const projectData = await graphcms.request(mutation, variables)
            const projectID = projectData.createProject.id

            for(const client of variables.clients) {
                await graphcms.request(gql`
                    mutation UpdateProject($id: ID!, $clientID: ID!){ 
                        updateProject(
                            data: {clients: {connect: {where: {id: $clientID}}}}
                                  where: { id: $id }
                          ) { 
                          id 
                        }
                    }`, { clientID: client.id, id: projectID }
                )
            }
            for(const task of variables.tasks) {
                const taskData = await graphcms.request(gql`
                    mutation CreateTask(
                        $id: ID!
                        $gID: String!
                        $automationID: ID! 
                        $title: String!
                    ){
                        createTask(
                            data: {
                                automation: { connect: { id: $automationID }}
                                creator: { connect: { gID: $gID }}
                                project: { connect: { id: $id }}
                                title: $title
                                condition: none
                            }
                        ) {
                            id
                        }
                    }
                `, { id: projectID, gID: variables.gID, automationID: task.automationID, title: task.title }
                )
                const taskID = taskData.createTask.id

                await graphcms.request(
                    gql`mutation PublishTask($id: ID){ 
                        publishTask(where: { id: $id }) {id} 
                    }`, 
                    { id: taskID }
                )

                await graphcms.request(gql`
                    mutation UpdateProject($id: ID!, $taskID: ID!){ 
                        updateProject(
                            data: {tasks: {connect: {where: {id: $taskID}}}}
                                  where: { id: $id }
                          ) { 
                          id 
                        }
                    }`, { taskID: taskID, id: projectID }
                )
            }


            await graphcms.request(
                gql`mutation PublishProject($id: ID){ 
                    publishProject(where: { id: $id }) {id} 
                }`, 
                { id: projectID }
            )
            return
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
                            firstName
                            lastName
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
                            firstName
                            lastName
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