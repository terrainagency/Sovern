<template>
  <div class="flex flex-col w-screen h-screen">
    <header class="flex items-center bg-white h-20 pr-5 flex-shrink-0">
      <div class="w-20 h-full flex items-center justify-center border-r border-black/10">
        <SovernLogo v-bind:size="`w-8 h-8`" />
      </div>
      <div class="flex-grow px-10 relative font-bold flex">
        <h1 class="">Moodboards</h1>
        <!-- <div class="flex items-center justify-center flex-grow">
          <button class="w-6 h-6 flex items-center justify-center mx-2">
            <div class="w-2 h-2 border-b-2 border-l-2 border-black transform rotate-45"></div>
          </button>
          <span>June 2022</span>
          <button class="w-6 h-6 flex items-center justify-center mx-2">
            <div class="w-2 h-2 border-t-2 border-r-2 border-black transform rotate-45"></div>
          </button>
        </div> -->
      </div>
      <div class="w-7 h-7 mx-4 relative">
        <svg class="w-full h-full" viewBox="0 0 24 24">
          <path id="Path_2" data-name="Path 2" d="M14,20a2.5,2.5,0,0,1-4,0" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <path id="Path_3" data-name="Path 3" d="M6,12.482V9a6,6,0,0,1,6-6h0a6,6,0,0,1,6,6v3.482h0l1.376,1.377A2.133,2.133,0,0,1,17.862,17.5H6.138a2.133,2.133,0,0,1-1.509-3.641L6,12.482" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <path id="Path_4" data-name="Path 4" d="M24,24H0V0H24Z" fill="none"/>
        </svg>
        <div class="w-2 h-2 bg-warning rounded-full absolute top-0 right-0"></div>
      </div>
      <template v-if="isLoggedIn">
        <div class="flex items-center ml-2">
          <div class="w-10 h-10">
            <img :src="user.image" class="rounded-full shadow-md w-full min-h-full">
          </div> 
        </div>
      </template>
      <div v-show="!isLoggedIn" id="googleButton"></div>
    </header>

    <div class="flex h-full">
      <Navigation v-bind:page="'moodboards'" />

      <main class="w-full bg-white pl-10 pr-16 pb-5 flex">
        <Nuxt />
      </main>
    </div>
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
  },
  mounted() {
    
  }
}
</script>



