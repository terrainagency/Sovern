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
    modules: ['~/modules/auth', '~/modules/graphcms', '~/modules/cloudinary', '@nuxtjs/cloudinary'],
    cloudinary: {
        cloudName: 'sovern',
    },
    publicRuntimeConfig: {
        auth: {
            cookieName: 'idToken',
            clientId: '1068047830067-u3uibqsscqtu3gt60fgfemnkera3jhuh.apps.googleusercontent.com',
        },
        graphcms: {
            app: 'https://api-us-east-1.graphcms.com/v2/cktunnv680pby01w52lp7c0xv/master',
            key: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDMzODY3NjksImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdHVubnY2ODBwYnkwMXc1MmxwN2MweHYvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYWE0NTVjMGQtMjY2OS00MmYyLWEwZDgtZjMzNTI5ZjljMTA4IiwianRpIjoiY2t5eW0xdXM4MDJ6ZDAxejYxYm9qMGM2diJ9.i9NlgkCkKaErSDqM19N-JzGf82_T4pFccUkRhD9jBu3EMTucPIyOnMdIuDi74fLalvZh0PPH6uUQJswxy3x82hadCdnIPDG1JCIIg25Et000JodfGYMOVNMJ_YonR66v34LzJCbGIGgkxuPypRIfMKXsrH0b8VeCDibIVju2Wr777mTgt4jygMI4LIGFNpUzLL61lKiC4HN0Du9SsSfiqYbAavlc6lVFg2LPnUAyUmcP_M1Lz2S1T48edNhwAoxxOFW54hzLZ6n6N9jFoima18o1N-cgOYzB1eN5nrqd154UbmMWSwlLypY0ttl3q2XRo5OAnSlxEqCYYDAno8MHt2RRLw973LFjklOK837D96kZ06KfzXJ2mhw-Dt0rYs-Gfn8PFXjLhzGrYtoO2Q7f-jIPzJkouWyh0dpxI2wtoQbD7EvHSyjXxWaj5G7lkcUgXKzft6wMTcfLtRrnBIZX6EpVwEVtkqcLQCsLObFGGaXj_PsJ68qClIGObin8ZZNCchWvP5tlt6IbcclVgBpYQA5fCyumahpES1WJvJyCjjY1dQgovtA9JkelKmRqRFqWHHJV_tSmoSb2vPKnE1GAR5pOZXYcE5FlliWwjVdy7Uk1LUPI8d_VzRZ05Cl-o5VcJs-531ExQ3ab_YytJpp3JvSJKbureQDMHb_uF-8ijBM',
        },
        cloudinary: {
            apiKey: '915554583119871'
        }
    },
    privateRuntimeConfig: {
        graphcms: {
            app: 'https://api-us-east-1.graphcms.com/v2/cktunnv680pby01w52lp7c0xv/master',
            key: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDQwODA1MDUsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdHVubnY2ODBwYnkwMXc1MmxwN2MweHYvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiY2JlYjRjNzctNGE1Yy00MTRiLWIyZGQtMmU2OGY1MGZlNzJhIiwianRpIjoiY2t6YTMzMTYyMW5xaDAxejY0cGd3NzBqbiJ9.RwE9NtrfMWKVgbt0lDXhIQj12bqsfV44yPRyAKoGz0yUQu-TPTeDfThho2iW5hDkne267UXRjlCQ4euKMQ5KtYFVXZiyIKpWCZE5aK8PRDW_7JD6OkKwiEWI5_dZTOXqnY79Z9RqoTIqaSJPEzAV72YyfsGnlMbXSIVUrp_v2RCkmoIOG5iWpUkChdbQXYK0hEPQssy9kcowqarTsH5nISjhEJ18IlCLMT7o6WUqtC9FKOYLPYUL-Eg9270tM6D-5oMqSPZM4JHi-ux7mG2CvPOOaMaCkX2Ihj4Y2gLRc3PfFnEbmMzrkKkHI4_SWieUvUiG8WQDG10CmuGp6ApsdHp74r8mZ-iMww3eXzFAD1qZX1kMclQKX9LjZeaEcmQ4ssF44g19AsnA3TJIurSoHdGg4a7evnXN8B8B01dcm7wIzsg_k2ewlHbnuN3QP4213FlRnm413BtTfVpRE7WUzML6OayG7ai2SXwxojgLpyKckldoCttN1tkJmxm_mPCIHMNUSjQzeuwzj1hzd8vLQ7Ug9scJZ1qU_jeeC2402Qjea9uYoeLWyoWXst0cZ7Z-lG2ILQ-kCdJM6fN4lt2HBALcqf5bStJBFc3o5ggTrly4cNB24ZDgPwHVKxvacgpK1kjgc87xemhKSeJs5pE0XhqyKu3K4WEXanL0GkkT1tI',
        },
        cloudinary: {
            apiSecret: '1gd5jCk6IyZh77qFGovKYRvkAG4',
        }
    },
}
