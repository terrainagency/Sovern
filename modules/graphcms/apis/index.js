import userApi from './user'
import projectsApi from './projects'
import collectionsApi from './collections'
import servicesApi from './services'
import workflowsApi from './workflows'
import automationsApi from './automations'
import tasksApi from './tasks'

export default (graphcmsConfig) => {
    return {
        user: userApi(graphcmsConfig),
        projects: projectsApi(graphcmsConfig),
        collections: collectionsApi(graphcmsConfig),
        services: servicesApi(graphcmsConfig),
        workflows: workflowsApi(graphcmsConfig),
        automations: automationsApi(graphcmsConfig),
        tasks: tasksApi(graphcmsConfig), 
    }
}
