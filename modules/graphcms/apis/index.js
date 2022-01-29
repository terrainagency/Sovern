import userApi from './user'
import projectsApi from './projects'

export default (graphcmsConfig) => {
    return {
        user: userApi(graphcmsConfig),
        projects: projectsApi(graphcmsConfig),
    }
}
