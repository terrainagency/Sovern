<template>
    <div class="w-full overflow-x-hidden">
        <div class="flex -mx-2">
            <div v-for="moodboard in moodboards" :key="moodboard.id" class="w-1/5 mx-2">
                <nuxt-link :to="`/admin/moodboards/${moodboard.id}`" class="block bg-white-100 rounded-2xl relative overflow-hidden border border-black/5 shadow-lg mb-2">
                    <div class="pb-3/4"></div>
                    <div class="absolute top-0 right-0 bottom-0 left-0 flex flex-wrap">
                        <div v-for="image in moodboard.images" :key="image.id" class="w-1/3 h-1/2">
                            <img :src="image.url" class="w-full h-full object-cover">
                        </div>
                    </div>
                </nuxt-link>

                <div>{{ moodboard.title }}</div>
            </div>

            <ModalCreateMoodboard />
            
        </div>
    </div>
</template>

<script>
import Cookie from 'js-cookie'
import { unWrap } from '~/utils/fetchUtils'

export default {
    layout: 'moodboards',
    data() {
        return {
            moodboards: []
        }
    },
    mounted() {
        this.moodboards = this.getMoodboardList()
    },
    methods: {
        async getMoodboardList(){
            this.moodboards = (await unWrap(await fetch(`/api/moodboards/list`))).json
        },
    }
}
</script>
