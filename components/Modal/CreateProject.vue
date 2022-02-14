<template>
    <!-- NOTE: Update the background to a blur via canvas -->
    <div class="h-full">
        <button @click="show = true" class="w-full border border-white-200 rounded-md h-full hover:text-black">Create new project</button>
        
        <div v-if="show" @click.self="show = false" class="fixed top-0 left-0 flex items-center justify-center overflow-scroll w-screen h-screen bg-black/10">

            <form ref="modal" v-on:submit.prevent="createProject" class="my-1/12 relative w-full max-w-screen-md pt-6 px-4 pb-6 rounded-xl shadow-xl bg-white border border-white-100 overflow-hidden">
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
                            <input @focus="titleEdit = true" @keyup.delete="titleCleared" v-model="project.title" :class="titleEdit ? 'input input-md mb-2' : 'input input-md mb-2 text-gray'" type="text">
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

                <button v-if="!loading" type="submit" class="btn btn-lg btn-black rounded-xl mx-auto mt-8">Create</button>

                <div v-if="loading" class="absolute top-0 right-0 bottom-0 left-0 bg-white/70 z-50 flex items-center justify-center">
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            </form>
            
        </div>
        <span class="absolute bottom-0 right-0 bg-black/90 text-white rounded-md p-3">{{ project }}</span>
    </div>
    
    
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'
export default {
    data() {
        return {
            show: false,
            loading: false,
            showDirections: false,
            titleEdit: false,
            projectList: [],
            project: {
                clients: [],
                title: '',
                moodboard: '',
                address: '',
                directions: '',
                latitude: '',
                longitude: '',
                timeZone: '',
                startTime: '',
                endTime: '',
                workflow: '',
                tasks: [],
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
            // Disable all fields
            // Show loading indicator
            this.loading = true

            await fetch('/api/projects', {
                method: 'POST',
                body: JSON.stringify(this.project),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            this.show = false
            this.loading = false
            this.$emit('created', this.project)
        },
        updateMoodboard(e) { this.project.moodboard = e },
        updateLocation(e) { 
            this.project.address = e.address
            this.project.latitude = e.latitude
            this.project.longitude = e.longitude
        },
        updateDirections(e) { this.project.directions = e },
        updateClients(clients) { 
            this.project.clients = clients
            if(!this.titleEdit) {
                let str = ''
                clients.forEach((client, i) => {
                    str += `${client.firstName} ${client.lastName}`
                    if(client.company) str += `with ${client.company}`
                    if(clients.length > 1 && i !== clients.length-1) str += ', '
                })
                // if(clients[0]) str += `${clients[0].firstName} ${clients[0].lastName}`
                // if(clients[1]) str += ` with ${clients[1].firstName} ${clients[1].lastName}`
                // if(clients[2]) str += ` and ${clients[2].firstName} ${clients[2].lastName}`
                
                this.project.title = str
            }
        },
        updateDateTime(e) {
            this.project.startTime = e.start
            this.project.endTime = e.end
            this.project.timeZone = e.timeZone
        },
        updateWorkflow(e) { 
            this.project.workflow = e 
            this.scheduleTasks()
        },
        updatePrice(e) { this.project.price = e },
        async scheduleTasks() {
            const workflow = (await unWrap(await fetch(`/api/workflows/tasks&id=${this.project.workflow}`))).json
            this.project.tasks = []

            workflow.automations.forEach(automation => {
                this.project.tasks.push({
                    automationID: automation.id,
                    title: automation.title,
                    deadline: (() => {
                        let deadline = ''
                        let num = parseInt(automation.timing.split(' ')[0])
                        let unit = automation.timing.split(' ')[1]

                        let eventEnd = new Date(this.project.endTime)

                        // !--[FLAG] - Task Scheduling Logic Goes Here
                        unit === 'hours' ? deadline = new Date(eventEnd.setHours( eventEnd.getHours() + num )).toISOString() : deadline = ''
                        
                        return deadline
                    })()
                })
            })
        },
        titleCleared() { if(this.project.title === '') this.titleEdit = false }
    }
}
</script>
