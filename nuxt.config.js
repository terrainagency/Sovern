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
    modules: ['~/modules/auth', '~/modules/graphcms'],
    publicRuntimeConfig: {
        auth: {
            cookieName: 'idToken',
            clientId: '1068047830067-u3uibqsscqtu3gt60fgfemnkera3jhuh.apps.googleusercontent.com',
        },
        graphcms: {
            app: 'https://api-us-east-1.graphcms.com/v2/cktunnv680pby01w52lp7c0xv/master',
            key: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDMzNDAyNjUsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdHVubnY2ODBwYnkwMXc1MmxwN2MweHYvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZWM0NmMwYjItM2QwMC00NzgyLWI1NWYtYmVmN2QwZmFjNmE4IiwianRpIjoiY2t5eHVkNGdvMHkxZDAxeXZmcmVrZ3BqaSJ9.ilDroRNEoWI1_nCCxKKdo9zOtOqsBw7SMgz0wDqeU7WPwZUHNP63kW_UvOCZBc0SfeB83Fbo58z_bMIaKAxS4x_6z5BDmoYvtUo6_PddmbqehQMPvsY681kKZjutToByblBY9uxstNoyFauChQnEEdn7iC8-1TdGMbQ9-81wQGJSSUt7Lj8b2qZfjxDBFlN7z_G-WvOvbQEuDpO4q2YG1c-pgbyMAtd66jALksyEEyVDWSrgPWhyPw1jp7J7VW8X_mPRoaCU7j3ZUYWB5N18mh6GQjMwyeW2-TFOnbN22XO0YtnYkbgO6tucZ-41wd8TLGXTWMARPAPOZBpECn_HsTkLFO_sHi_eFkMx9MbUQd-fFJ3vnqN0WJE9Q94Bx7Z-difCi2MHQMVhOdwbh9FXWWVjcn-TAjJoRnCghPMEeTeq1N7xBcz5F3dLHoxpArNzuO5kOUqQ43w1-ePpklOQafi9CAg5UABL-fsCnI6lKsdga639D7LMbcPGjVoxZFBatWzEJLTk5ixUE2Ch_m4uCXPs2MrN821NEE6KWHyhvnC1tBJjsCncgEIVTSlpXpUnxidMgTKJxnJGaSwdq8dN4NDLHePBoyK0s6JIAoAcIe0fyNlRNO-0D7RNxl0_tDulYfScYWal-NWDfPecm-_6vwEcVX1TauPmU8gNuCGVebk',
        }
    },
    privateRuntimeConfig: {
        graphcms: {
            app: 'https://api-us-east-1.graphcms.com/v2/cktunnv680pby01w52lp7c0xv/master',
            key: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDMzMjU2MDEsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdHVubnY2ODBwYnkwMXc1MmxwN2MweHYvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiM2FlODdjMWUtNDcxNi00MmUwLTg2NjAtYzdlOTE1ZDNmZTE4IiwianRpIjoiY2t5eGxtdG5zMHFidjAxeXZoNndzNml5ZSJ9.kbnSDEA8i-ai58FD6Ompx_psKXlXutYQdc5O_KZrHhkhF8-HOzS0IT27rVQrrB_kXDpjCFmClLvzgBvz7AjozCXeDjx1vZjQHNPZFpTcP_MnXkaby62yKvbNOyvN9FYioseD8WqRsuHqlFqK4wANLLcTIbtfyMGWYMpatWGtCj-IRAjcuetDo0ioyZkaC79fi2vYlfCwYnxNUvM8Q7elhp_Yd4P66mLxBN1pq3KPFbd_TpRW5Yg_HYCNpc5Y227tgGZP_mK_13_XpEHdypS6v626Zj6EizJsx8n95QWCdtfSCopHKDLpp-xGwNR10-MVOp9U7tp1wMWiIXEpGPI11PIV4GVMdtTLvHgc511Lx7qZMs_HGsC6rKy25siKOHeurTzpgpuhaLLg44TGWV8kdhTI6blXbucDVHyNwhyBsJFl1yp5kX2ws1KlM2RBBGl-5zdk-FOyKdap-1nk6egXylRj3BT4s1qhiydHTREj-_eneNK1iJQbI5ozAtlK5A6lX7KlWuovuxZCBtG01autn0w28LZeXgDMmLC0IdmyoDmoWTriRDYkKqLi5LKpNy8WqeTGvr9h95QrEWffwJbuQ260zgjWxe9iYWc8ksAjlGAwaBiktzinnMTDkX52GJ8xSEcK7_W4wO8mdJK8uLrkrT5iJbzoRRnzntUarUcduIM',
        }
    },
}
