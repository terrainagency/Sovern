<template>
    <div @click.prevent="showModal = false" v-if="showModal" class="absolute top-0 right-0 bottom-0 left-0 bg-black/10 flex items-center justify-center">


        <div @click.stop="" class="w-full max-w-lg p-6 bg-white rounded-3xl shadow-xl">
            <nuxt-link :to="`/moodboards/${project.moodboard.id}`" class="hover-span-to-black rounded-xl overflow-hidden flex relative">
                <div v-for="image in project.moodboard.moodboardImages" :key="image.url" class="w-1/2 h-full">
                    <img :src="image.url" />
                </div>
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-gray transition duration-150 font-normal shadow-md rounded-full py-2 px-4">Moodboard</span>
            </nuxt-link>

            <div v-if="project.geoLocation">
                
            </div>

                    {{ project }}

        </div>
        
    </div>
</template>
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            showModal: true,
        }
    }
    // Get proejct by ID
}
</script>
