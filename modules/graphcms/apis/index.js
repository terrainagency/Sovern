import userApi from './user'
import clientsApi from './clients'
import projectsApi from './projects'
import moodboardsApi from './moodboards'
import moodboardImagesApi from './moodboardimages'
import collectionsApi from './collections'
import servicesApi from './services'
import workflowsApi from './workflows'
import automationsApi from './automations'
import tasksApi from './tasks'

export default (graphcmsConfig) => {
    return {
        user: userApi(graphcmsConfig),
        clients: clientsApi(graphcmsConfig),
        projects: projectsApi(graphcmsConfig),
        moodboards: moodboardsApi(graphcmsConfig),
        moodboardImages: moodboardImagesApi(graphcmsConfig),
        collections: collectionsApi(graphcmsConfig),
        services: servicesApi(graphcmsConfig),
        workflows: workflowsApi(graphcmsConfig),
        automations: automationsApi(graphcmsConfig),
        tasks: tasksApi(graphcmsConfig), 
    }
}
