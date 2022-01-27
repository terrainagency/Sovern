<template>
    <div>
  
  <!-- <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Nuxt Mountains</h1>
      <ul>
        <li v-for="mountain of mountains" :key="mountain.title">{{ mountain.title }}</li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>
  </div> -->

        <ul class="pl-10 pt-2">
            <li v-for="gallery in galleries" :key="gallery.id">
                <nuxt-link :to="`/gallery/${gallery.slug}`" class="@link inline-block text-9xl">{{ gallery.title }}<div class="ml-10 mr-5 bg-black w-[1px] h-32 transform rotate-12 translate-y-5 inline-block"></div><div v-if="$route.name == gallery.slug" class="transform -translate-y-2 h-[1px] w-full bg-black pointer"></div></nuxt-link>
            </li>
            <li><nuxt-link :to="`/info`" class="@link inline-block text-9xl">Info*<div class="ml-10 mr-5 bg-black w-[1px] h-32 transform rotate-12 translate-y-5 inline-block"></div></nuxt-link></li>
        </ul>
    </div>
</template>



<script>
//   export default {
//     data() {
//       return {
//         mountains: []
//       }
//     },
//     async fetch() {
//       this.mountains = await fetch(
//         'https://api.nuxtjs.dev/mountains'
//       ).then(res => res.json())
//     }
//   }
import { gql } from 'graphql-request'

  export default {
    data() {
      return {
        galleries: []
      }
    },
    async fetch() {
                console.log("FETCHING")

      this.galleries = await $graphcms.request(
        gql`
            {
                galleries(where: {isPrimary: true}) {
                    id
                    title
                    slug
                }
            }
        `
        );
        console.log(this.galleries)
    },
    fetchOnServer: false,
  }
</script>
