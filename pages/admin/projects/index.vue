<template>
    <main class="flex h-full">
        <div class="bg-white w-full px-10">
            Projects

            {{ projectList }}

            <div v-for="project in projectList" :key="project.objectID">
                {{ project}}
            </div>

            <form v-on:submit.prevent="createProject" class="max-w-sm p-10 rounded-xl shadow-xl">
                <input type="text" v-model="project.clientID" placeholder="Clients">
                <!-- <input type="text" v-model="project.companyID" placeholder="companyID"> -->
                <input type="text" ref="locationSelector" v-model="project.address" autocomplete="off" placeholder="select a location" v-on:changed="changed">
                <input type="text" v-model="project.startTime" placeholder="startTime">
                <input type="text" placeholder="Duration">
                <input type="text" v-model="project.endTime" placeholder="endTime" class="hidden">
                <input type="text" v-model="project.price" placeholder="price">
                <!-- <input type="text" v-model="project.serviceID" placeholder="serviceID"> -->
                <button type="submit" class="btn btn-lg btn-primary mx-auto mt-5">Create Project</button>
            </form>
        </div>
    </main>

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
        this.$maps.makeAutoComplete(this.$refs.locationSelector, ['address'])
        this.setProjectsList()
    },
    methods: { 
        async setProjectsList(){
            this.projectList = (await unWrap(await fetch('api/projects/user/'))).json
        },
        changed(event) {
            const addressParts = event.detail.address_components
            // const street = this.getAddressPart(addressParts, 'street_number')?.short_name || ''
            const geo = event.detail.geometry.location
            this.project.latitude = geo.lat()
            this.project.longitude = geo.lng()
        },
        getAddressPart(parts, type) {
            return parts.find(part => part.types.includes(type))
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
