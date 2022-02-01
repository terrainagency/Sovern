import userApi from './user'
import projectsApi from './projects'
import workflowsApi from './workflows'

export default (graphcmsConfig) => {
    return {
        user: userApi(graphcmsConfig),
        projects: projectsApi(graphcmsConfig),
        workflows: workflowsApi(graphcmsConfig),
    }
}
