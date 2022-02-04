import bodyParser from 'body-parser'
import userRouter from './routers/user'
import projectsRouter from './routers/projects'
import workflowsRouter from './routers/workflows'
import automationsRouter from './routers/automations'
import tasksRouter from './routers/tasks'
import collectionsRouter from './routers/collections'
import getApis from './apis'

export default function() {
    const graphcmsConfig = this.options.privateRuntimeConfig.graphcms
    const apis = getApis(graphcmsConfig)

    this.nuxt.hook('render:setupMiddleware', (app) => {
        app.use(bodyParser.json())
        app.use('/api/user', userRouter(apis))
        app.use('/api/projects', projectsRouter(apis))
        app.use('/api/collections', collectionsRouter(apis))
        app.use('/api/workflows', workflowsRouter(apis))
        app.use('/api/automations', automationsRouter(apis))
        app.use('/api/tasks', tasksRouter(apis))
    })
}