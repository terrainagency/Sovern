import { gql } from 'graphql-request'
import { getGraphQLClient } from "../../helpers"

export default (graphcmsConfig) => {
    const graphcms = getGraphQLClient(graphcmsConfig)
    
    return {
        getBySlug: async function(slug) {
            const query = gql`
                query GetCreatorByID($slug: String!) {
                    creator(where: {slug: $slug}) {
                        slug
                        image 
                        name
                    }
                }
            `
            let data = await graphcms.request(query, {slug: slug})
            return data.creator
        },
    }
}