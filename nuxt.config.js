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
            key: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDMzODY3NjksImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdHVubnY2ODBwYnkwMXc1MmxwN2MweHYvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYWE0NTVjMGQtMjY2OS00MmYyLWEwZDgtZjMzNTI5ZjljMTA4IiwianRpIjoiY2t5eW0xdXM4MDJ6ZDAxejYxYm9qMGM2diJ9.i9NlgkCkKaErSDqM19N-JzGf82_T4pFccUkRhD9jBu3EMTucPIyOnMdIuDi74fLalvZh0PPH6uUQJswxy3x82hadCdnIPDG1JCIIg25Et000JodfGYMOVNMJ_YonR66v34LzJCbGIGgkxuPypRIfMKXsrH0b8VeCDibIVju2Wr777mTgt4jygMI4LIGFNpUzLL61lKiC4HN0Du9SsSfiqYbAavlc6lVFg2LPnUAyUmcP_M1Lz2S1T48edNhwAoxxOFW54hzLZ6n6N9jFoima18o1N-cgOYzB1eN5nrqd154UbmMWSwlLypY0ttl3q2XRo5OAnSlxEqCYYDAno8MHt2RRLw973LFjklOK837D96kZ06KfzXJ2mhw-Dt0rYs-Gfn8PFXjLhzGrYtoO2Q7f-jIPzJkouWyh0dpxI2wtoQbD7EvHSyjXxWaj5G7lkcUgXKzft6wMTcfLtRrnBIZX6EpVwEVtkqcLQCsLObFGGaXj_PsJ68qClIGObin8ZZNCchWvP5tlt6IbcclVgBpYQA5fCyumahpES1WJvJyCjjY1dQgovtA9JkelKmRqRFqWHHJV_tSmoSb2vPKnE1GAR5pOZXYcE5FlliWwjVdy7Uk1LUPI8d_VzRZ05Cl-o5VcJs-531ExQ3ab_YytJpp3JvSJKbureQDMHb_uF-8ijBM',
        }
    },
    privateRuntimeConfig: {
        graphcms: {
            app: 'https://api-us-east-1.graphcms.com/v2/cktunnv680pby01w52lp7c0xv/master',
            key: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDMzODY5NzEsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdHVubnY2ODBwYnkwMXc1MmxwN2MweHYvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYThhN2M5YzktMTVlZi00OGJkLWJlMTUtM2M3NWFjZmI4NjBkIiwianRpIjoiY2t5eW02NzI4MDJnNzAxemMyeDRrN293cSJ9.ri0MeDhCxJB_svklLR_NUyHrXb9n-JU4YWNehtJP3GklBKx3QPSMwNHxkCg_37gxiyyASEHgYaKJ4w5_z4ZNkkrPAq2amNHmHIlgRs1qIlz434rM8TiKuUZqyHZ1kU7T1UV31xisgLqn96fOtCskIGIhoi4-H_ucOEc59PmtItQJR0CZL3GmiGv7ApCPsc9pv4EpwwjX-z0ludp4tu21YzjWGwVbwccWzVdzhPRZNBM1zu-1GqRvuLhlhNUCfs08eARbS2Vj9y06CZ34DO64FrAw-z_CDu1I5Ar7E4BKa_dLv9mgDMj7Lms9n-vtj5g0zdGpj4wEfGN8U6xAW3EWzI7i6o8j6M6EnjZNG9-sMrzxxH6lRHfmtaJ3drCWUN50uHqH9B-Q2ui63FcrFpvLEoPTzvc9klirWyd0uev9liY2hgvV6GrzX6R4K13GJC2_GNpJ2mqJWZozFnIGTMwZAjwr7Hvct893kety9M1VhVwdCbXQ_xBmM5gDHnBN90IQKZm15bbPLK5BfvNpA-3XH93bbcyCYev27V4aPkPf_UnjEOfdswY_3hYu70gxMKXESmcTnv9pMquvy0aBJmIVYv3gfjytvaOOIpPcQYeun3XynSLn3Kl1SLCe176b4vI9fYsnWFPzl7tDfwybrxTB0vzJZtMjRa32Nu5li9bDOp4',
        }
    },
}
