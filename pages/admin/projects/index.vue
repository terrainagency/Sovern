<template>
<div class="w-full h-full ">
    <div class="pt-8">
        <header class="font-bold mb-2">In progress ({{ projectList.length }})</header>

        <!-- Projects where Workflow.id = XXX -->
        <table class="w-full mb-10">
            <tr>
                <th>Title</th>
                <th class="px-6">Date</th>
                <th class="pl-6 pr-9">Client</th>
                <th class="flex justify-center items-center">
                    <svg class="w-5 h-5 mr-1 stroke-current" viewBox="0 0 24 24">
                        <g id="Group_178" data-name="Group 178">
                            <path id="Path_62" data-name="Path 62" d="M8.557,3.687a9,9,0,1,1-4.87,11.756A9,9,0,0,1,8.557,3.687" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_63" data-name="Path 63" d="M11.718,7.985v4.651l3.656,2.229" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </g>
                    </svg>

                    Call sheet
                </th>
                <th class="status">Photoshoot</th>
                <th class="status">Exported</th>
                <th class="status">Proofs</th>
                <th class="status">Selections</th>
                <th class="status">Edits</th>
                <th class="status">Final confirmation</th>
            </tr>
            <tr v-for="project in projectList" :key="project.id" class="">
                <td class="text-black whitespace-nowrap">
                    <button @click="selectedProject = project; showProjectModal = true" class="hover:bg-white-100 w-full h-full rounded-md select-none text-left px-6">{{ project.title }}</button>
                </td>
                <td class="w-0 whitespace-nowrap px-6">{{ project.startTime }}</td>
                <td class="w-0 whitespace-nowrap pl-6 pr-9"><span v-for="client in project.clients" :key="client.id">{{ client.name }}</span></td>
                <td class="status"><button class="bg-success text-white">Sent</button></td>
                <td class="status"><button class="bg-success text-white">Completed</button></td>
                <td class="status"><button class="bg-success text-white">Completed</button></td>
                <td class="status"><button class="bg-warning text-white">Overdue</button></td>
                <td class="status"><button class="hover:bg-white-100"> </button></td>
                <td class="status"><button class="hover:bg-white-100"> </button></td>
                <td class="status"><button class="hover:bg-white-100"> </button></td>
            </tr>
            <tr>
                <td class="mb-2"><ModalCreateProject /></td>
            </tr>
        </table>

        <div><button class="font-bold mb-2 text-gray hover:text-black">Upcoming (14)</button></div>

        <div><button class="font-bold mb-2 text-gray hover:text-black">Archived (0)</button></div>

        <ModalViewProject v-if="showProjectModal" v-bind:project="selectedProject" @showModal="closeProjectModal" />
</div>
</div>
        
</template>

<script>
import Cookie from 'js-cookie'
import { unWrap } from '~/utils/fetchUtils'

export default {
    layout: 'projects',
    data() { 
        return {
            projectList: [],
            selectedProject: {},
            showProjectModal: false
        }
    },
    mounted() {
        this.setProjectsList()
    },
    methods: { 
        async setProjectsList(){
            this.projectList = (await unWrap(await fetch('/api/projects/user/'))).json
        },
        closeProjectModal() {
            this.showProjectModal = false
        }
    },
    asyncData({ $config, redirect }){
        if(!Cookie.get($config.auth.cookieName)){
            redirect('/no-acces/')
            return
        }
    }
}
</script>
