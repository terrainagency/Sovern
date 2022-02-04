<template>
  <nav class="w-20 bg-white h-full border-r border-black/10 flex justify-center flex-shrink-0">
    <ul class="w-full flex flex-col py-5 items-center">

      <!-- Dashboard -->
      <li class="relative w-16 h-16 flex items-center justify-center">
        <nuxt-link to="/admin" :class="(page === 'dashboard')?'w-12 h-12 mx-auto rounded-xl text-white bg-black flex items-center justify-center':'w-12 h-12 border border-transparent hover:border-black/10 rounded-xl transition duration-150 flex items-center justify-center'">
          <Icon v-bind:icon="'dashboard'" class="w-8 h-8" />
        </nuxt-link>
      </li>

      <!-- Projects -->
      <li class="w-16 h-16 relative flex items-center justify-center">
        <nuxt-link to="/admin/projects" :class="(page === 'projects')?'w-12 h-12 mx-auto rounded-xl text-white bg-black flex items-center justify-center':'w-12 h-12 border border-transparent hover:border-black/10 rounded-xl transition duration-150 flex items-center justify-center'">
          <Icon v-bind:icon="'projects'" class="w-8 h-8" />
        </nuxt-link>
      </li>

      <!-- Moodboards -->
      <li class="w-16 h-16 flex items-center justify-center">
        <nuxt-link to="/admin/moodboards" :class="(page === 'moodboards')?'w-12 h-12 mx-auto rounded-xl text-white bg-black flex items-center justify-center':'w-12 h-12 border border-transparent hover:border-black/10 rounded-xl transition duration-150 flex items-center justify-center'">
          <Icon v-bind:icon="'moodboards'" class="w-8 h-8" />
        </nuxt-link>
      </li>

      <!-- Reports -->
      <li class="w-16 h-16 flex items-center justify-center">
        <nuxt-link to="/admin/reports" :class="(page === 'reports')?'w-12 h-12 mx-auto rounded-xl text-white bg-black flex items-center justify-center':'w-12 h-12 border border-transparent hover:border-black/10 rounded-xl transition duration-150 flex items-center justify-center'">
          <Icon v-bind:icon="'reports'" class="w-8 h-8" />
        </nuxt-link>
      </li>

      <!-- Settings -->
      <li class="mt-auto w-16 h-16 flex items-center justify-center">
        <nuxt-link to="/admin/settings" :class="(page === 'settings')?'w-12 h-12 mx-auto rounded-xl text-white bg-black flex items-center justify-center':'w-12 h-12 border border-transparent hover:border-black/10 rounded-xl transition duration-150 flex items-center justify-center'">
          <Icon v-bind:icon="'settings'" class="w-8 h-8" />
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    page: {
      type: String,
      required: true
    }
  }
}
</script>