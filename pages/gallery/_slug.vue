<template>
    <div>
        <main class="lg:px-1/12 xl:px-2/12 overflow-x-hidden">
            <!-- <div class="text-9xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-300 capitalize opacity-10">{{ gallery.slug }}</div> -->

        
            <div v-for="block in gallery.blocks" :key="block.id">

                <div class="flex -m-[2px] overflow-hidden mb-32">
                    <div v-for="image in block.images" :key="image.fileName" class="p-[2px]">
                        <img :src="image.url">
                    </div>
                </div>
            </div>


        </main>
    </div>
</template>

<script>
import { gql } from 'graphql-request'

export default {
    async asyncData({ $graphcms, params }) {
        console.log(params.slug);

        const { gallery } = await $graphcms.request(
            gql`
                query GetGallery($slug: String) {
                    gallery(where: {slug: $slug}) {
                        title
                        blocks {
                            id
                            images { 
                                    caption {
                                    html
                                }
                                url
                            }
                        }
                    }
                }
            `,
             { slug: params.slug }
        )

        return { gallery }
    }
}
</script>