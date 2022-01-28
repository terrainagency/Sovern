import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _25024237 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _51411428 = () => interopDefault(import('../pages/bookings/index.vue' /* webpackChunkName: "pages/bookings/index" */))
const _c71c934e = () => interopDefault(import('../pages/info.vue' /* webpackChunkName: "pages/info" */))
const _b47fa156 = () => interopDefault(import('../pages/no-access.vue' /* webpackChunkName: "pages/no-access" */))
const _7134221b = () => interopDefault(import('../pages/packages/index.vue' /* webpackChunkName: "pages/packages/index" */))
const _44a28a3e = () => interopDefault(import('../pages/retouching.vue' /* webpackChunkName: "pages/retouching" */))
const _1adddfc8 = () => interopDefault(import('../pages/specials/index.vue' /* webpackChunkName: "pages/specials/index" */))
const _1a31953e = () => interopDefault(import('../pages/waitlist.vue' /* webpackChunkName: "pages/waitlist" */))
const _d5b5feb0 = () => interopDefault(import('../pages/admin/bookings/index.vue' /* webpackChunkName: "pages/admin/bookings/index" */))
const _22ac3564 = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _7ed60090 = () => interopDefault(import('../pages/bookings/_id.vue' /* webpackChunkName: "pages/bookings/_id" */))
const _0ffdbdf2 = () => interopDefault(import('../pages/gallery/_slug.vue' /* webpackChunkName: "pages/gallery/_slug" */))
const _6f7d80d3 = () => interopDefault(import('../pages/packages/_slug.vue' /* webpackChunkName: "pages/packages/_slug" */))
const _19273e80 = () => interopDefault(import('../pages/specials/_slug.vue' /* webpackChunkName: "pages/specials/_slug" */))
const _6218fbcb = () => interopDefault(import('../pages/bookings/_service/_slug.vue' /* webpackChunkName: "pages/bookings/_service/_slug" */))
const _6967e001 = () => interopDefault(import('../pages/packages/_collection/_slug.vue' /* webpackChunkName: "pages/packages/_collection/_slug" */))
const _dad177aa = () => interopDefault(import('../pages/specials/_service/_slug.vue' /* webpackChunkName: "pages/specials/_service/_slug" */))
const _7ada3eb7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _25024237,
    name: "admin"
  }, {
    path: "/bookings",
    component: _51411428,
    name: "bookings"
  }, {
    path: "/info",
    component: _c71c934e,
    name: "info"
  }, {
    path: "/no-access",
    component: _b47fa156,
    name: "no-access"
  }, {
    path: "/packages",
    component: _7134221b,
    name: "packages"
  }, {
    path: "/retouching",
    component: _44a28a3e,
    name: "retouching"
  }, {
    path: "/specials",
    component: _1adddfc8,
    name: "specials"
  }, {
    path: "/waitlist",
    component: _1a31953e,
    name: "waitlist"
  }, {
    path: "/admin/bookings",
    component: _d5b5feb0,
    name: "admin-bookings"
  }, {
    path: "/admin/login",
    component: _22ac3564,
    name: "admin-login"
  }, {
    path: "/bookings/:id",
    component: _7ed60090,
    name: "bookings-id"
  }, {
    path: "/gallery/:slug?",
    component: _0ffdbdf2,
    name: "gallery-slug"
  }, {
    path: "/packages/:slug",
    component: _6f7d80d3,
    name: "packages-slug"
  }, {
    path: "/specials/:slug",
    component: _19273e80,
    name: "specials-slug"
  }, {
    path: "/bookings/:service/:slug?",
    component: _6218fbcb,
    name: "bookings-service-slug"
  }, {
    path: "/packages/:collection/:slug?",
    component: _6967e001,
    name: "packages-collection-slug"
  }, {
    path: "/specials/:service/:slug?",
    component: _dad177aa,
    name: "specials-service-slug"
  }, {
    path: "/",
    component: _7ada3eb7,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
