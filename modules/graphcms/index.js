import bodyParser from 'body-parser'
import userRouter from './routers/user'
import projectsRouter from './routers/projects'
import getApis from './apis'

export default function() {
    const graphcmsConfig = this.options.privateRuntimeConfig.graphcms
    const apis = getApis(graphcmsConfig)

    this.nuxt.hook('render:setupMiddleware', (app) => {
        app.use(bodyParser.json())
        app.use('/api/user', userRouter(apis))
        app.use('/api/projects', projectsRouter(apis))
    })
}