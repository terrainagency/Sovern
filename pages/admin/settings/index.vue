<template>
    <div class="w-full overflow-x-hidden">
            <section class="mb-20">

                <h3 class="font-bold mb-4">Workflows</h3>

                <div class="flex -mx-2">
                    <div v-for="workflow in workflows" :key="workflow.id" class="w-full max-w-xs mx-2">
                        <nuxt-link :to="`settings/workflows/${workflow.id}`" class="bg-white-100 rounded-xl w-full flex items-center justify-center relative mb-2">
                            <div class="pb-full"></div>
                            <span class="absolute text-black/10 text-5xl">{{ workflow.title.match(/\b(\w)/g).join('') }}</span>
                        </nuxt-link>

                        <div class="font-light tracking-wide">{{ workflow.title }}</div>
                    </div>
                    
                    <ModalCreateWorkflow />
                </div>

            </section>

            <section class="mb-20">
                <h3 class="font-bold mb-4">Collections</h3>

                <div class="flex -mx-2">
                    <ModalCreateWorkflow />
                </div>

                <!-- Folder icon? -->
                
            </section>
            
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
