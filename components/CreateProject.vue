<template>
<div>
    <button @click="showForm = true" class="btn btn-lg btn-primary rounded-full mx-auto mt-7">+ new</button>
    <!-- NOTE: Update the background to a blur via canvas -->
    <div v-if="showForm" @click.prevent="showForm = false" class="fixed top-0 left-0 flex items-center justify-center overflow-scroll w-screen h-screen bg-black/10">

            <form v-on:submit.prevent="createProject" @click.stop="" class="relative w-full max-w-md pt-6 px-10 pb-10 rounded-xl shadow-xl bg-white border border-white-100">
                <!-- <button @click="showForm = false" class="h-12 w-12 bg-white hover:text-gray border border-gray/10 transition duration-150 shadow-md rounded-full flex items-center justify-center absolute top-3 -left-6">
                    <div class="h-2 w-2 border-l-2 border-b-2 border-current transform rotate-45"></div>
                </button> -->

                <header class="mb-8 font-bold text-center">New project</header>

                <InputMoodboard />

                <InputClient /> 

                <div class="mb-2">
                    <input class="input input-md" type="text" placeholder="Title">
                </div>

                <!-- <input type="text" v-model="project.companyID" placeholder="companyID"> -->

                <DatePicker />

                <InputLocation />
                <InputPrice />

                <!-- <input type="text" placeholder="Duration"> -->

                <button type="submit" class="btn btn-lg btn-primary mx-auto mt-5">Create</button>
                
                <!-- <input type="text" v-model="project.serviceID" placeholder="serviceID"> -->
            </form>
        </div>
    </div>
    
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'
export default {
    data() {
        return {
            showForm: false,
            projectList: [],
            project: {
                address: '',
                latitude: '',
                longitude: '',
                startTime: '',
                endTime: '',
                price: '',
            }
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
    }
}
</script>
