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

export function rejectHitBadRequest(res) {
    res.statusCode = 400
    res.end()
}
export function hasBadBody(req) {
    return !req.body || Object.keys(req.body).length === 0
}