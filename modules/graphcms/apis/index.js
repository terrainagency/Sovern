import userApi from './user'

export default (graphcmsConfig) => {
    return {
        user: userApi(graphcmsConfig)
    }
}
