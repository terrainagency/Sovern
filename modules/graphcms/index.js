import bodyParser from 'body-parser'
import userRouter from './routers/user'
import projectsRouter from './routers/projects'
import moodboardsRouter from './routers/moodboards'
import moodboardImagesRouter from './routers/moodboardImages'
import collectionsRouter from './routers/collections'
import servicesRouter from './routers/services'
import workflowsRouter from './routers/workflows'
import automationsRouter from './routers/automations'
import tasksRouter from './routers/tasks'
import getApis from './apis'

export default function() {
    const graphcmsConfig = this.options.privateRuntimeConfig.graphcms
    const apis = getApis(graphcmsConfig)

    this.nuxt.hook('render:setupMiddleware', (app) => {
        app.use(bodyParser.json())
        app.use('/api/user', userRouter(apis))
        app.use('/api/projects', projectsRouter(apis))
        app.use('/api/moodboards', moodboardsRouter(apis))
        app.use('/api/moodboardimages', moodboardImagesRouter(apis))
        app.use('/api/collections', collectionsRouter(apis))
        app.use('/api/services', servicesRouter(apis))
        app.use('/api/workflows', workflowsRouter(apis))
        app.use('/api/automations', automationsRouter(apis))
        app.use('/api/tasks', tasksRouter(apis))
    })
}