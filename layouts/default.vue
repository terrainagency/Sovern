<template>
  <div class="flex flex-col w-screen h-screen">
    <header class="flex items-center bg-white h-20 pr-5 flex-shrink-0">
      <div class="w-20 h-full flex items-center justify-center border-r border-black/10">
        <SovernLogo v-bind:size="`w-8 h-8`" />
      </div>
      <div class="flex-grow px-10 relative font-bold flex">
        <h1 class="">Dashboard</h1>
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
      <nav class="w-20 bg-white h-full border-r border-black/10 flex justify-center flex-shrink-0">
        <ul class="w-full flex flex-col py-5 items-center">
          <li class="relative w-16 h-16 flex items-center justify-center">

            <nuxt-link to="/admin" class="w-12 h-12 mx-auto rounded-xl text-white bg-black flex items-center justify-center">
              <svg class="w-8 h-8 stroke-current" viewBox="0 0 24 24">
                <path id="Path_39" data-name="Path 39" d="M19.071,9.172c3.905,1.562,3.905,4.095,0,5.657a21.924,21.924,0,0,1-14.142,0c-3.905-1.562-3.905-4.095,0-5.657a21.924,21.924,0,0,1,14.142,0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                <path id="Path_40" data-name="Path 40" d="M14.828,4.929a21.924,21.924,0,0,1,0,14.142c-1.562,3.905-4.095,3.905-5.657,0a21.924,21.924,0,0,1,0-14.142c1.562-3.905,4.095-3.905,5.657,0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                <path id="Path_41" data-name="Path 41" d="M19.071,4.929a10,10,0,1,1-14.142,0,10,10,0,0,1,14.142,0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
              </svg>
            </nuxt-link>
            
            <!-- <div class="absolute top-1/2 transform -translate-y-1/2 right-0 rounded-l-lg w-2 h-3 bg-black"></div> -->
          </li>
          <li class="w-16 h-16 relative flex items-center justify-center">
            <nuxt-link to="/admin/projects" class="w-12 h-12 border border-transparent hover:border-black/10 rounded-xl transition duration-150 flex items-center justify-center">
              <svg class="w-8 h-8 stroke-current" viewBox="0 0 24 24">
                <g id="Group_173" data-name="Group 173">
                  <path id="Path_53" data-name="Path 53" d="M20.221,4.292h0a2.1,2.1,0,0,0-2.871-.1L9.313,11.228a2,2,0,0,0-.1,2.919L10.365,15.3a2,2,0,0,0,2.919-.1l7.032-8.037A2.1,2.1,0,0,0,20.221,4.292Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                  <path id="Path_54" data-name="Path 54" d="M10.87,9.87l3.78,3.78" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                  <path id="Path_55" data-name="Path 55" d="M3.6,20.323H7.3A3.351,3.351,0,0,0,9.671,14.6h0a3.016,3.016,0,0,0-4.958,1.074L3.191,19.735a.436.436,0,0,0,.408.588Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                </g>
              </svg>
            </nuxt-link>
          </li>
          <li class="w-16 h-16 flex items-center justify-center">
            <nuxt-link to="/admin/moodboards" class="w-12 h-12 border border-transparent hover:border-black/10 rounded-xl transition duration-150 flex items-center justify-center">
                <svg class="w-8 h-8 stroke-current" viewBox="0 0 24 24">
                    <g id="Group_172" data-name="Group 172">
                        <path id="Path_48" data-name="Path 48" d="M19,21H16a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2v5A2,2,0,0,1,19,21Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                        <path id="Path_49" data-name="Path 49" d="M19,9H16a2,2,0,0,1-2-2V5a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2V7A2,2,0,0,1,19,9Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                        <path id="Path_50" data-name="Path 50" d="M5,3H8a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                        <path id="Path_51" data-name="Path 51" d="M5,15H8a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V17A2,2,0,0,1,5,15Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                    </g>
                </svg>
            </nuxt-link>
          </li>
          <li class="w-16 h-16 flex items-center justify-center">
            <nuxt-link to="/admin/reports" class="w-12 h-12 border border-transparent hover:border-black/10 rounded-xl transition duration-150 flex items-center justify-center">
              <svg class="w-8 h-8 stroke-current" viewBox="0 0 24 24">
                <path id="Path_46" data-name="Path 46" d="M6,12H7.85l2.168,5L13.982,7l2.168,5H18" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                <path id="Path_47" data-name="Path 47" d="M17.5,21.5H6.5a4,4,0,0,1-4-4V6.5a4,4,0,0,1,4-4h11a4,4,0,0,1,4,4v11A4,4,0,0,1,17.5,21.5Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
              </svg>
            </nuxt-link>
          </li>
          <!-- Settings will house automations/documents/templates/etc -->
          <li class="mt-auto w-16 h-16 flex items-center justify-center">
            <nuxt-link to="/admin/settings" class="w-12 h-12 border border-transparent hover:border-black/10 rounded-xl transition duration-150 flex items-center justify-center">
              <svg class="w-8 h-8 stroke-current" viewBox="0 0 24 24">
                <path id="Path_15" data-name="Path 15" d="M13.909,10.091a2.7,2.7,0,1,1-3.818,0,2.7,2.7,0,0,1,3.818,0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                <path id="Path_16" data-name="Path 16" d="M5.25,12a7.137,7.137,0,0,0,.063.882L3.725,14.124A.9.9,0,0,0,3.5,15.28l1.412,2.443a.9.9,0,0,0,1.112.384l1.422-.571a.912.912,0,0,1,.846.1,6.863,6.863,0,0,0,.684.4.916.916,0,0,1,.509.682L9.7,20.23a.9.9,0,0,0,.888.77h2.817a.9.9,0,0,0,.888-.77l.217-1.512a.918.918,0,0,1,.512-.683,6.6,6.6,0,0,0,.681-.4.915.915,0,0,1,.85-.1l1.419.57a.9.9,0,0,0,1.112-.384L20.5,15.28a.9.9,0,0,0-.224-1.156l-1.588-1.242A7.138,7.138,0,0,0,18.75,12a7.138,7.138,0,0,0-.063-.882l1.588-1.242A.9.9,0,0,0,20.5,8.72L19.087,6.277a.9.9,0,0,0-1.112-.384l-1.419.57a.918.918,0,0,1-.85-.1,6.6,6.6,0,0,0-.681-.4.918.918,0,0,1-.512-.683L14.3,3.77A.9.9,0,0,0,13.409,3H10.592a.9.9,0,0,0-.888.77L9.486,5.284a.92.92,0,0,1-.509.682,7.062,7.062,0,0,0-.684.4.917.917,0,0,1-.847.1L6.025,5.893a.9.9,0,0,0-1.112.384L3.5,8.72a.9.9,0,0,0,.224,1.156l1.588,1.242A7.138,7.138,0,0,0,5.25,12Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
              </svg>
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <main class="h-full w-full bg-white pl-10 pr-16 pb-5 flex">
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



