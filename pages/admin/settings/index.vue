<template>
    <div class="w-full overflow-x-hidden flex">
        <nav class="w-1/3 max-w-xs h-full">
            <h3 class="text-gray mb-4">Workflows</h3>
            <ul class="mb-8">
                <li>
                    
                    <button class="py-4 px-5 border border-transparent hover:border-black/10 transition duration-100 rounded-xl relative w-full flex justify-start items-center">
                        <!-- <Icon :icon="'collapse'" class="mr-3"/> -->
                        <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'workflow'" class="w-full h-full" /></span>Model Test
                    </button>
                </li>
            </ul>
            <h3 class="text-gray mb-4">Collections</h3>
            <ul class="mb-8">
                <li>
                    
                    <button class="py-4 px-5 border shadow-md border-black/5 transition duration-100 rounded-xl relative w-full flex justify-start items-center mb-3">
                        <!-- <Icon :icon="'collapse'" class="mr-3"/> -->
                        <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'folder-open'" class="w-full h-full" /></span>Austin
                    </button>
                    <!-- <ul class="pl-4">
                        <li>
                            
                            <button class="py-3 px-4 ml-4 rounded-lg relative w-full text-left hover:bg-white-100 flex justify-start items-center">
                                Studio
                            </button>
                        </li>
                        <li>
                            <button class="py-3 px-4 ml-4 rounded-lg relative w-full text-left hover:bg-white-100">Location</button>
                        </li>
                    </ul> -->
                </li>
                <li>
                    <button class="py-4 px-5 border border-transparent hover:border-black/10 transition duration-100 rounded-xl relative w-full flex justify-start items-center">
                        <!-- <Icon :icon="'expand'" class="mr-3"/> -->
                        <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'folder'" class="w-full h-full" /></span>Los Angeles
                    </button>
                </li>
                <li>
                    <button class="py-4 px-5 border border-transparent hover:border-black/10 transition duration-100 rounded-xl relative w-full flex justify-start items-center">
                        <!-- <Icon :icon="'expand'" class="mr-3"/> -->
                        <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'folder'" class="w-full h-full" /></span>New York
                    </button>
                </li>
            </ul>
        </nav>
        <div class="hidden">
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

                <!-- <div class="relative border-gradient border-gradient-rounded-lg w-full rounded-lg bg-white p-3 hover:shadow-lg transition duration-150">Austin</div> -->

                <!-- <div class="flex -mx-2">
                    <ModalCreateWorkflow />
                </div> -->

                <!-- Folder icon? -->
                
            </section>
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
