<template>
    <div>
        <!-- <div v-if="!ready" class="p-4">
            <div class="h-8 w-8"><div class="spinner"></div></div>
        </div> -->
        <div v-if="project" class="pt-10 px-4 mb-4 flex flex-wrap justify-center w-full max-w-screen-md">
            <header class="w-full mb-6 text-center">
                <h1 class="font-bold text-center text-xl">{{ project.title }}</h1>
            </header>

            <section class="w-3/5 pr-2 flex-grow">
                <div v-if="!admin" class="p-3 border border-black/5 shadow-md shadow-black/5 rounded-2xl mb-4">
                    <header class="flex items-center justify-between mb-8">
                        <h2 class="font-bold text-center pl-2">Status</h2>

                        <div v-if="nextStep" class="flex items-center">{{ nextStep.title }}<div class="ml-4 py-2 px-3 rounded-xl bg-pending/10 text-pending flex items-center"> <span :class="`w-2 h-2 rounded-full bg-pending inline-block mr-3 capitalize`"></span>{{ nextStep.condition.replace("_", " ") }}</div></div>
                    </header>
                    <div class="px-2 w-full">
                        <div class="w-full h-2 flex mb-4 relative">
                            <div class="absolute bg-white-100 top-0 right-0 left-0 bottom-0 rounded-full overflow-hidden"></div>
                            <div class="relative rounded-l-full w-full mr-[1px] bg-success shadow-lg shadow-success"></div>
                            <div class="relative w-full mr-[1px] bg-success shadow-lg shadow-success"></div>
                            <div v-for="task in project.tasks" :key="task.id" :class="task.condition === 'completed' ? 'w-full mr-[1px] bg-success shadow-lg shadow-success relative' : 'relative w-full mr-[1px]'"></div>
                        </div>
                    </div>
                </div>
                
                <div class="relative bg-gray/20 rounded-xl w-full h-80 card overflow-hidden flex flex-wrap mb-4" role="button">
                    <div v-for="image in project.moodboard.images" :key="image.id" class="w-1/3 h-1/2">
                        <img :src="image.url" class="w-full h-full object-cover">
                    </div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-5 bg-white transition duration-150 rounded-full shadow-lg tracking-wider text-sm whitespace-nowrap">
                        Moodboard
                    </div> 
                </div>

                <div v-if="project.geoLocation && project.address">
                    <InputLocation :input="{ latitude: project.geoLocation.latitude, longitude: project.geoLocation.longitude, address: project.address }" :class="admin ? `mb-8` : `mb-8 h-96`" />            
                </div>
                
                <div v-if="project.description" class="mb-8">
                    <div class="mb-1 font-bold">Info</div>
                    <div>{{ project.description }}</div>
                </div>
            </section>

            <section class="w-2/5 pl-2 max-w-xs">
                <div class="mb-8 text-left">
                    <div class="pb-2">Studio Model Test</div>
                    <div>$475<span class="text-gray pl-4">2 Looks - 4 Photos</span></div>
                </div>

                <div class="mb-8 text-left">
                    <div class="pb-2">Monday, Feb 24</div>
                    <span class="inline-block border border-black/5 rounded-lg py-2 px-3">9:00 AM</span><span class="text-gray px-3">to</span><span class="inline-block border border-black/5 rounded-lg py-2 px-3">11:00 AM</span>
                </div>
                <ul class="flex flex-col items-start mb-8">
                    <li class="p-2 flex items-center justify-center border border-transparent hover:shadow-md hover:border-black/5 rounded-xl select-none" role="button">
                        <div class="rounded-full overflow-hidden w-14 h-14 relative flex items-center justify-center shadow-md shadow-black/5 select-none bg-white-200 mr-3">
                            <img :src="project.creator.image" alt="" class="absolute w-full h-full object-cover">
                        </div>
                        <div class="text-left pr-2">
                            <p>{{ project.creator.name }} (he/him)</p>
                            <p class="text-gray">Photographer</p>
                        </div>
                    </li>
                    <li v-for="client in project.clients" :key="client.id" class="p-2 flex items-center justify-center border border-transparent hover:shadow-md hover:border-black/5 rounded-xl select-none" role="button">
                        <div class="rounded-full overflow-hidden w-14 h-14 relative flex items-center justify-center shadow-md shadow-black/5 select-none bg-white-200 mr-3">
                            <div class="relative text-gray">{{ client.firstName.slice(0,1) }}{{ client.lastName.slice(0,1) }}</div>
                        </div>
                        <div class="text-left pr-2">
                            <p>{{ client.firstName }} {{ client.lastName }} (he/him)</p>
                            <p class="text-gray">Model</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
    
</template>

<script>
import { unWrap } from '~/utils/fetchUtils'

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        admin: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            project: undefined,
            ready: false,
            nextStep: null
        }
    },
    mounted() {
        console.log(this.id)
        this.getProject(this.id)
    },
    methods: {
        async getProject(id) {
            this.project = (await unWrap(await fetch(`/api/projects/?id=${id}`))).json
            this.setStatus()
            this.ready = true
            this.$emit('loaded')
        },
        setStatus() {
            for(const task of this.project.tasks) {
                if(task.condition !== 'completed') {
                    this.nextStep = task
                    return
                }
            }
        }
    }
}
</script>
