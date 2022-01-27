export default {
    components: true,
    head: {
        titleTemplate: "Tony Redmer - %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs: {
            class: ["bg-white-100 font-body"]
        },
        meta: [
            {
                charset: "utf-8",
                viewport: "width=device-width, initial-scale=1.0"
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
            { rel: 'apple-touch-icon', href: '/favicon.png' },
            { rel: 'manifest', href: '/manifest.webmanifest' }
        ]
    },
    buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/dotenv', '@nuxtjs/axios'],
    plugins: ['~/plugins/graphcms', '~plugins/maps.client', '~/plugins/auth.client'],
    publicRuntimeConfig: {
        auth: {
            cookieName: 'idToken',
            clientId: '1068047830067-u3uibqsscqtu3gt60fgfemnkera3jhuh.apps.googleusercontent.com',
        },
    },
    privateRuntimeConfig: {
    },
}
