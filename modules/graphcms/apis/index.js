import userApi from './user'
import projectsApi from './projects'
import workflowsApi from './workflows'
import automationsApi from './automations'
import tasksApi from './tasks'

export default (graphcmsConfig) => {
    return {
        user: userApi(graphcmsConfig),
        projects: projectsApi(graphcmsConfig),
        workflows: workflowsApi(graphcmsConfig),
        automations: automationsApi(graphcmsConfig),
        tasks: tasksApi(graphcmsConfig),
    }
}
