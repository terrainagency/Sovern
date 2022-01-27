<template>
    <div>
        
        <!-- <main class="lg:px-1/12 xl:px-2/12 overflow-x-hidden">

            <div v-for="block in galleries.home" :key="block.objectID">

                <div v-if="block.length > 1" class="flex -mx-1 mb-20 md:mb-40">
                    <div v-for="image in block" :key="image.objectID" class="w-1/2 px-1">
                        <GalleryImage :image="image" :aspectRatio="`pb-5/4`" />
                    </div>
                </div>
                <div v-else class="flex -mx-1 mb-20 md:mb-40">
                    <div v-for="image in block" :key="image.objectID" class="w-full">
                        <GalleryImage :image="image" :aspectRatio="`pb-3/5`" />
                    </div>
                </div>
            </div>
        </main> -->
        <Navigation :galleries="galleries"></Navigation>
        
    </div>
</template>

<script>
import { gql } from 'graphql-request'

export default {
  async asyncData({ $graphcms }) {
    const { galleries } = await $graphcms.request(
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

    return { galleries };

  }
}
</script>