import getApis from './apis'
import userRouter from './routers/user'

export default function() {
    const graphcmsConfig = this.options.privateRuntimeConfig.graphcms
    const apis = getApis(graphcmsConfig)

    this.nuxt.hook('render:setupMiddleware', (app) => {
        app.use('/api/user', userRouter(apis))
    })
}