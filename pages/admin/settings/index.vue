<template>
    <div class="w-full overflow-x-hidden">

            <h3 class="font-bold mb-4">Workflows</h3>

            <div class="flex -mx-2">
                <nuxt-link v-for="workflow in workflows" :key="workflow.id" :to="`settings/workflows/${workflow.id}`" class="bg-white-100 rounded-xl w-full max-w-xs mx-2">
                    <div class="pb-full"></div>
                    {{ workflow.title }}
                </nuxt-link>

                
                <ModalCreateWorkflow />
            </div>
            
        <!-- Create workflow -->
    </div>
</template>

<script>
import Cookie from 'js-cookie'
import { unWrap } from '~/utils/fetchUtils'

export default {
    layout: 'settings',
    data() {
        return {
            workflows: []
        }
    },
    mounted() {
        this.setWorkflowsList();
    },
    methods: {
        async setWorkflowsList(){
            this.workflows = (await unWrap(await fetch('/api/workflows/listing/user'))).json
        },
    },
    asyncData({ $config, redirect }){
        if(!Cookie.get($config.auth.cookieName)){
            redirect('/no-acces/')
            return
        }
    }
}
</script>
