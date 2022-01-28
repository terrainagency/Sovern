<template>
  <div>
    <header class="flex bg-white h-20 pr-5 border-b border-black/10">
      <div class="w-20 h-full flex items-center justify-center">
        <SovernLogo v-bind:size="`w-8 h-8`" />
      </div>
      <div class="flex-grow"></div>
      <template v-if="isLoggedIn">
        <div class="flex items-center">
          <span class="pr-3">{{ user.fullName }}</span>
          <div class="w-10 h-10">
            <img :src="user.profileUrl" class="rounded-full shadow-md w-full min-h-full">
          </div> 
          
        </div>
        
      </template>
      <div v-show="!isLoggedIn" id="googleButton" class=""></div>
    </header>
   
    <Nuxt />
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn
    }
  }
}
</script>



