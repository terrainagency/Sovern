<template>
    <div class="w-full">
        <header class="text-center">
            <h1 class="text-5xl font-bold mt-10 mb-6">{{ moodboard.title }}</h1>
            <div class="mb-14">[users_collaborators]</div>
            <div class="mb-20">
                <button class="btn-md bg-black text-white rounded-xl">#Lighting</button>
                <button class="btn-md">#Styling</button>
                <button class="btn-md">#Makeup</button>
            </div>
        </header>
        

        
        <section class="w-full grid grid-cols-5 gap-6">
            <div v-for="image in moodboard.images" :key="image.id" class="w-full">
                <img @click.prevent="targetImage = image" :src="image.url" class="w-full object-cover rounded-2xl overflow-hidden" role="button" />
            </div>
        </section>

        <ModalMoodboardLightbox :image="targetImage" />
        
        <InputImageUploader @file-uploaded="addImage" class="mt-20" />
    </div>
</template>
<script>
import Cookie from 'js-cookie'
import { unWrap } from '~/utils/fetchUtils'

export default {
    layout: 'moodboards',
    data() {
        return {
            moodboard: {},
            targetImage: undefined,
            showCreateAutomation: false,
        }
    },
    mounted() {
        this.moodboard = this.getMoodboard(this.$route.params.id)
    },
    methods: {
        async getMoodboard(id){
            this.moodboard = (await unWrap(await fetch(`/api/moodboards/${id}`))).json
        },
        async addImage(imageURL) {
            await fetch('/api/moodboardimages', {
                method: 'POST',
                body: JSON.stringify({ url: imageURL, moodboardID: this.$route.params.id }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
    }
}
</script>