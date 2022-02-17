<template>
    <div class="w-full h-full ">
        <div class="pt-8">
            <header class="font-bold mb-2">In progress ({{ projectList.length }})</header>

            <!-- Projects where Workflow.id = XXX -->
            <table class="w-full mb-10">
                <tr>
                    <th>Title</th>
                    <th class="px-6">Date</th>
                    <th class="pl-6 pr-9">Clients</th>
                    <th v-for="(task, i) in taskHeaders" :key="`${task}-${i}`" class="status">{{ task }}</th>
                    <th></th>
                </tr>
                
                <tr v-for="project in projectList" :key="project.id" class="">
                    <td class="text-black whitespace-nowrap">
                        <button @click="selectProject(project.id)" class="hover:bg-white-100 w-full h-full rounded-md select-none text-left px-6">{{ project.title }}</button>
                    </td>
                    <td class="w-0 whitespace-nowrap px-6 text-gray select-none">{{ new Date(project.startTime).toLocaleString('en-US', { timeZone: project.timeZone,  }).split(',')[0] }}</td>
                    <td class="whitespace-nowrap relative px-6 w-0 text-gray">
                        <span v-if="project.clients.length > 0" class="mr-2 select-none bg-white-100 py-2 px-3 rounded-md">{{ project.clients[0].firstName }} {{ project.clients[0].lastName }} </span>
                        <span v-if="project.clients.length > 1">+{{ project.clients.length-1 }}</span>
                    </td>
                    <td v-for="(task, i) in project.tasks" class="status" :key="`${task}-${i}`">
                        <InputTaskCondition v-bind:task="task" />
                    </td>
                    <td class="w-0">
                        <div class="ml-2 h-10 w-10 border border-black/5 hover:border-success rounded-full transition duration-150" role="button"></div>
                    </td>
                </tr>
                <tr>
                    <td class="mb-2">
                        <ModalCreateProject @created='setProjectsList' />
                    </td>
                </tr>
            </table>

            <div><button class="font-bold mb-2 text-gray hover:text-black">Upcoming (14)</button></div>

            <div><button class="font-bold mb-2 text-gray hover:text-black">Archived (0)</button></div>

            <Modal ref="spm" size="md">
                <template v-slot:body>
                    <Project :id="selectedProjectID" :admin="true" @loaded="$refs.spm.ready()" />
                </template>
                <template v-slot:nav>
                    <div class="w-full relative flex justify-end px-4">
                        <nuxt-link :to="`/projects/${selectedProjectID}`" class="mx-1 bg-white hover:bg-white-100 transition duration-150 shadow-lg border border-black/5 flex items-center justify-center rounded-lg w-32">Edit</nuxt-link>
                        <nuxt-link :to="`/projects/${selectedProjectID}`" target="_blank" class="bg-white shadow-lg border border-black/5 flex items-center justify-center rounded-lg px-3 font-normal mx-1"><BaseIcon name="Eye" class="w-6 h-6" /></nuxt-link>
                    </div>
                </template>
            </Modal>
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
            selectedProjectID: '',
            workflowID: "ckz768n9c01vl0b81l32elx66",
            automations: [],
            taskHeaders: [],
            showCreateProject: false,
        }
    },
    mounted() {
        this.setProjectsList()
        this.setTaskHeaders()
    },
    methods: { 
        async setProjectsList(){
            this.projectList = (await unWrap(await fetch(`/api/projects/?workflowId=${this.workflowID}`))).json
        },
        async setTaskHeaders(){
            this.automations = (await unWrap(await fetch(`/api/automations/${this.workflowID}`))).json

            this.automations.forEach(automation => {
                if(automation.type === 'task') {
                    this.taskHeaders.push(automation.title)
                }
            })
        },
        selectProject(id) {
            this.selectedProjectID = id
            this.$refs.spm.open()
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
