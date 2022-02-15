import { rejectHitBadRequest, hasBadBody, sendJSON } from "../../helpers"
import { parseQuery } from "../../../utils/fetchUtils"

export default (apis) => {
    return async (req, res) => {
        if(req.method == 'GET'){
            let query = parseQuery(req.url)

            if(query.slug) {
                return await getCreatorBySlug(query.slug, res)
            }
        }
        rejectHitBadRequest(res)
    }

    async function getCreatorBySlug(slug, res) {
        sendJSON(await apis.creators.getBySlug(slug), res)
    }
}