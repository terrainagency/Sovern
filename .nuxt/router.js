import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bdd3b3a = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _3c71f47c = () => interopDefault(import('../pages/bookings/index.vue' /* webpackChunkName: "pages/bookings/index" */))
const _635b2fad = () => interopDefault(import('../pages/info.vue' /* webpackChunkName: "pages/info" */))
const _5b9d2afe = () => interopDefault(import('../pages/no-access.vue' /* webpackChunkName: "pages/no-access" */))
const _5c65026f = () => interopDefault(import('../pages/packages/index.vue' /* webpackChunkName: "pages/packages/index" */))
const _3f64e535 = () => interopDefault(import('../pages/retouching.vue' /* webpackChunkName: "pages/retouching" */))
const _060ec01c = () => interopDefault(import('../pages/specials/index.vue' /* webpackChunkName: "pages/specials/index" */))
const _1b5376dc = () => interopDefault(import('../pages/waitlist.vue' /* webpackChunkName: "pages/waitlist" */))
const _788df50c = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _20c2d73c = () => interopDefault(import('../pages/admin/projects/index.vue' /* webpackChunkName: "pages/admin/projects/index" */))
const _4baae5e4 = () => interopDefault(import('../pages/bookings/_id.vue' /* webpackChunkName: "pages/bookings/_id" */))
const _4474f9c4 = () => interopDefault(import('../pages/gallery/_slug.vue' /* webpackChunkName: "pages/gallery/_slug" */))
const _5aae6127 = () => interopDefault(import('../pages/packages/_slug.vue' /* webpackChunkName: "pages/packages/_slug" */))
const _04581ed4 = () => interopDefault(import('../pages/specials/_slug.vue' /* webpackChunkName: "pages/specials/_slug" */))
const _77fd39f7 = () => interopDefault(import('../pages/bookings/_service/_slug.vue' /* webpackChunkName: "pages/bookings/_service/_slug" */))
const _15723b56 = () => interopDefault(import('../pages/packages/_collection/_slug.vue' /* webpackChunkName: "pages/packages/_collection/_slug" */))
const _af08fb52 = () => interopDefault(import('../pages/specials/_service/_slug.vue' /* webpackChunkName: "pages/specials/_service/_slug" */))
const _ddc0203a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0bdd3b3a,
    name: "admin"
  }, {
    path: "/bookings",
    component: _3c71f47c,
    name: "bookings"
  }, {
    path: "/info",
    component: _635b2fad,
    name: "info"
  }, {
    path: "/no-access",
    component: _5b9d2afe,
    name: "no-access"
  }, {
    path: "/packages",
    component: _5c65026f,
    name: "packages"
  }, {
    path: "/retouching",
    component: _3f64e535,
    name: "retouching"
  }, {
    path: "/specials",
    component: _060ec01c,
    name: "specials"
  }, {
    path: "/waitlist",
    component: _1b5376dc,
    name: "waitlist"
  }, {
    path: "/admin/login",
    component: _788df50c,
    name: "admin-login"
  }, {
    path: "/admin/projects",
    component: _20c2d73c,
    name: "admin-projects"
  }, {
    path: "/bookings/:id",
    component: _4baae5e4,
    name: "bookings-id"
  }, {
    path: "/gallery/:slug?",
    component: _4474f9c4,
    name: "gallery-slug"
  }, {
    path: "/packages/:slug",
    component: _5aae6127,
    name: "packages-slug"
  }, {
    path: "/specials/:slug",
    component: _04581ed4,
    name: "specials-slug"
  }, {
    path: "/bookings/:service/:slug?",
    component: _77fd39f7,
    name: "bookings-service-slug"
  }, {
    path: "/packages/:collection/:slug?",
    component: _15723b56,
    name: "packages-collection-slug"
  }, {
    path: "/specials/:service/:slug?",
    component: _af08fb52,
    name: "specials-service-slug"
  }, {
    path: "/",
    component: _ddc0203a,
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
