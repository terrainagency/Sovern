<template>
    <div v-if="project" class="max-w-screen-md bg-white rounded-3xl w-full text-black p-10">
        <header class="mb-6">
            <h1 class="font-bold text-center">{{ project.title }}</h1>
        </header>

        <div class="relative bg-gray/20 rounded-xl w-full card overflow-hidden flex flex-wrap" role="button">
            <div v-for="image in project.moodboard.images" :key="image.id" class="w-1/3 h-1/2">
                <img :src="image.url" class="w-full h-full object-cover">
            </div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-5 bg-white transition duration-150 rounded-full shadow-lg tracking-wider text-sm whitespace-nowrap">
                Moodboard
            </div>
        </div>

        <div v-if="project.geoLocation">{{ project.geoLocation.latitude }} {{ project.geoLocation.longitude }}</div>
        <div v-if="project.address">{{ project.address }}</div>

        <div>Date Time</div>

        <div v-if="project.description">
            <div>Description</div>
            <div>{{ project.description }}</div>
        </div>

        <div v-if="project.tasks">
            Status
            <ul>
                <li>Photoshoot created</li>
                <li>Photoshoot confirmed</li>
                <li v-for="task in project.tasks" :key="task.id">{{ task.title }} - {{ task.condition }}</li>
            </ul>
        </div>

        <div>Files</div>

        <div>Package Info</div>

        <div>Contact</div>
    </div>
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'
export default {
    layout: 'project',
    data() {
        return {
            project: undefined
        }
    },
    mounted() {
        this.getProject(this.$route.params.id)
    },
    methods: {
        async getProject(id) {
            this.project = (await unWrap(await fetch(`/api/projects/?id=${id}`))).json
        }
    }
}
</script>