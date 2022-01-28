import { GraphQLClient } from "graphql-request"

export function getGraphQLClient(graphcmsConfig) {
    const graphcms = new GraphQLClient(graphcmsConfig.app, {
        headers: {
          authorization: `Bearer ${graphcmsConfig.key}`
        }
    })

    return graphcms
}

export function sendJSON(data, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
}