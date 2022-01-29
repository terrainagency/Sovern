<template>
    <div class="fixed top-0 left-0 flex items-center justify-center overflow-scroll w-screen h-screen bg-white/90">
        <form v-on:submit.prevent="createProject" class="w-full max-w-md p-10 rounded-xl shadow-xl bg-white border border-white-100">
            <!-- <h3 class="text-2xl font-bold text-center mb-4">Create new project</h3>

            {{ project }} -->
                <div class="mb-2">
                    <input class="input input-md" type="text" placeholder="Title">
                </div>


                <InputMoodboard />
                <!-- <input type="text" v-model="project.companyID" placeholder="companyID"> -->
                <InputClient /> 

                <DatePicker />

                <InputLocation />
                <InputPrice />

                <!-- <input type="text" placeholder="Duration"> -->

                <button type="submit" class="btn btn-lg btn-primary mx-auto mt-5">Create Project</button>
            
            <!-- <input type="text" v-model="project.serviceID" placeholder="serviceID"> -->
        </form>
    </div>
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'
export default {
    data() {
        return {
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
