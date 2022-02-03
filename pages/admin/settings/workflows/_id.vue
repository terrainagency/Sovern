<template>
    <div class="w-full">
        <h1 class="font-bold text-center mb-10">{{ workflow.title }}</h1>
        <section class="relative max-w-screen-lg mx-auto flex flex-col items-center  z-0">

            <!-- <div class="w-[2px] h-full absolute left-1/2 transform -translate-x-1/2 bg-black/5 -z-10"></div> -->

            <div class="relative rounded-lg border inline-block px-5 py-3 mb-10 border-white-200 text-white-200">
               <div class="text-center">Project created</div>
            </div>

            <CardAutomation v-for="automation in workflow.automations" :key="automation.id" v-bind:automation="automation" />

            <button @click.prevent="showCreateAutomation = true" class="my-5 btn btn-sm bg-black rounded-lg w-36 h-14">
                <div class="w-[2px] rounded-full h-3 bg-white absolute"></div>
                <div class="h-[2px] rounded-full w-3 bg-white absolute"></div>
            </button>

            <ModalCreateAutomation v-if="showCreateAutomation" v-bind:workflowID="$route.params.id" v-bind:automations="workflow.automations" />
        </section>
    </div>
</template>
<script>
import Cookie from 'js-cookie'
import { unWrap } from '~/utils/fetchUtils'

export default {
    layout: 'settings',
    data() {
        return {
            workflow: {},
            showCreateAutomation: false,
        }
    },
    mounted() {
        this.workflow = this.setWorkflow(this.$route.params.id)
    },
    methods: {
        async setWorkflow(id){
            this.workflow = (await unWrap(await fetch(`/api/workflows/${id}`))).json
        },    
        async createAutomation() {
            await fetch('/api/workflows/automation/user', {
                method: 'POST',
                body: JSON.stringify(this.workflow),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }   
    }
}
</script>