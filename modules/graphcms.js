import { createCrypto } from 'google-auth-library/build/src/crypto/crypto'
import { GraphQLClient, gql } from 'graphql-request'

export default function() {
    const graphcmsConfig = this.options.privateRuntimeConfig.graphcms
    const graphcms = new GraphQLClient(graphcmsConfig.app, {
        headers: {
          authorization: `Bearer ${graphcmsConfig.key}`
        }
    })

    this.nuxt.hook('render:setupMiddleware', (app) => {
        app.use('/api/user', getUserRoute)
    })

    async function getUserRoute(req, res, next) {
        const identity = req.identity
        console.log(identity)       

        const userData = await getUserByID(identity.id)
        console.log(userData)

        if(userData.creator) {
            console.log("user already exists")
            return
        }




        createUser(req.identity)
        next()
    }

    async function createUser(identity) {
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
                image: identity.image,
                joined: new Date().toISOString()
            }
            const data = await graphcms.request(mutation, variables)
    }

    async function getUserByID(identityId) {
        const query = gql`
            query FindCreator($gID: String!) {
                creator(where: {gID: $gID}) {
                    gID
                }
            }
        `
        const data = await graphcms.request(query, { gID: identityId })
        return data
    }
}