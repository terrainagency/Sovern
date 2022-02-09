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
                        <InputMoodboard class="mb-4" />
                        <InputLocation class="mb-8" />

                        

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
                            <InputClient /> 
                        </div>

                        <div class="mb-2">
                            <div class="text-sm mb-1">Title</div>
                            <input class="input input-md mb-2" type="text">
                        </div>

                        <div class="mb-2">
                            <div class="text-sm mb-1">Date</div>
                            <InputUtilsDatePicker @update-value="updateDate" :past="true" class="mb-4" />
                        </div>  

                        <div class="mb-2">
                            <div class="text-sm mb-1">Timing</div>
                            <InputStartEnd class="mb-4" />
                        </div>  
                        <div class="mb-2">
                            <div class="text-sm mb-1">Workflow</div>
                            <InputWorkflow />
                        </div>
                        
                        
                        
                        
                        <div class="mb-2">
                            <div class="text-sm mb-1">Price</div>
                            <InputPrice />
                        </div>
                    </fieldset>
                </div>

                <button type="submit" class="btn btn-lg btn-primary mx-auto mt-8">Create</button>
            </form>
        </div>
    </div>
    
    
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'
export default {
    data() {
        return {
            show: false,
            projectList: [],
            project: {
                address: '',
                latitude: '',
                longitude: '',
                startTime: '',
                endTime: '',
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
        updateDate(e) {
            this.date = e;
        }
    }
}
</script>
