<template>
    <!-- NOTE: Update the background to a blur via canvas -->
    <div class="h-full">
        <button @click="show = true" class="w-full border border-white-200 rounded-md h-full hover:text-black">Create new project</button>
        
        <div v-if="show" @click.self="show = false" class="fixed top-0 left-0 flex items-center justify-center overflow-scroll w-screen h-screen bg-black/10">

            <form ref="modal" v-on:submit.prevent="createProject" class="relative w-full max-w-screen-md pt-6 px-4 pb-6 rounded-xl shadow-xl bg-white border border-white-100">
                <!-- <button @click="show = false" class="h-12 w-12 bg-white hover:text-gray border border-gray/10 transition duration-150 shadow-md rounded-full flex items-center justify-center absolute top-3 -left-6">
                    <div class="h-2 w-2 border-l-2 border-b-2 border-current transform rotate-45"></div>
                </button> -->

                

                <header class="mb-8 font-bold text-center">New project</header>

                <!-- <button>From template</button>
                <button>From scratch</button> -->

                <div class="flex -mx-2">
                    <fieldset class="w-1/2 mx-2">
                        <InputMoodboard @output="updateMoodboard" class="mb-4" />
                        <InputLocation @output="updateLocation" class="mb-4" />

                        <button @click="showDirections = true" v-if="!showDirections" class="text-sm text-gray px-2 hover:text-black">+ Directions</button>
                        <div v-if="showDirections">
                            <div class="text-sm mb-1">Directions</div>
                            <InputUtilsTextarea class="input input-md" :placeholder="'Directions'" @output="updateDirections" />
                        </div>
                        

                    </fieldset>

                    <fieldset class="w-1/2 px-1 mx-2">
                        
                        
                        <!-- <template v-if="date">

                            <div class="mb-2">{{ date }}</div>
                            <InputHour class="mr-2" />
                            <span class="text-gray">-</span>
                            <InputHour class="ml-2" />
                        </template> -->
                        <div class="mb-2">
                            <div class="text-sm mb-1">Client(s)</div>
                            <InputClient @output="updateClients" /> 
                        </div>

                        <div class="mb-2">
                            <div class="text-sm mb-1">Title</div>
                            <input v-model="project.title" class="input input-md mb-2" type="text">
                        </div>

                        <div class="mb-2">
                            <InputDateTime @output="updateDateTime" />
                        </div>
                        <div class="mb-2">
                            <div class="text-sm mb-1">Workflow</div>
                            <InputWorkflow @output="updateWorkflow" />
                        </div>
                        
                        <div class="mb-2">
                            <div class="text-sm mb-1">Price</div>
                            <InputPrice @output="updatePrice" />
                        </div>
                    </fieldset>
                </div>

                <button type="submit" class="btn btn-lg btn-black rounded-xl mx-auto mt-8">Create</button>
            </form>
        </div>
        <span class="absolute top-0 left-0 bg-black/90 text-white rounded-md p-3">{{ project }}</span>
    </div>
    
    
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'
export default {
    data() {
        return {
            show: false,
            showDirections: false,
            projectList: [],
            project: {
                clients: [],
                title: '',
                moodboard: '',
                address: '',
                directions: '',
                latitude: '',
                longitude: '',
                startTime: '',
                endTime: '',
                workflow: '',
                price: '',
            },
            date: '',
        }
    },
    mounted() {
        this.setProjectsList()
    },
    methods: { 
        async setProjectsList(){
            this.projectList = (await unWrap(await fetch('api/projects/user/'))).json
        },
        async createProject() {
            await fetch('/api/projects', {
                method: 'POST',
                body: JSON.stringify(this.project),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        // updateDate(e) { this.date = e },
        // updateTiming(e) {
        //     this.project.startTime = new Date(`${this.date} ${e.start}`)
        //     this.project.endTime = new Date(`${this.date} ${e.end}`)
        // },
        updateMoodboard(e) { this.project.moodboard = e },
        updateLocation(e) { 
            this.project.address = e.address
            this.project.latitude = e.latitude
            this.project.longitude = e.longitude
        },
        updateDirections(e) { this.project.directions = e },
        updateClients(e) { this.project.clients = e },
        updateDateTime(e) {
            this.project.startTime = e.start
            this.project.endTime = e.end
        },
        updateWorkflow(e) { this.project.workflow = e },
        updatePrice(e) { this.project.price = e },
        
    }
}
</script>
