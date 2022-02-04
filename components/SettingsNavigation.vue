<template>
    <nav class="w-1/3 max-w-xs h-full">
        <h3 class="font-light tracking-wide mb-4">Workflows</h3>
        <ul class="mb-8">
            <li v-for="workflow in workflows" :key="workflow.id">
                <nuxt-link :to="`settings/workflows/${workflow.id}`" class="py-4 px-5 border border-transparent hover:border-black/10 transition duration-100 rounded-xl relative w-full flex justify-start items-center">
                    <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'workflow'" class="w-full h-full" /></span>{{ workflow.title }}
                </nuxt-link>
            </li>
            <li>
                <input type="text" v-model="newWorkflow.title" @keyup.enter.prevent="createWorkflow" class="py-4 px-5 focus:outline-none w-full text-left hover:bg-white-100 text-black rounded-xl" placeholder="+ new workflow">
            </li>
        </ul>
        
        <h3 class="font-light tracking-wide mb-4">Collections</h3>
        <ul class="mb-8">
            <li v-for="collection in collections" :key="collection.id">
                <nuxt-link v-if="current === collection.id" :to="`settings/collections/${collection.id}`" class="py-4 px-5 border shadow-md border-black/5 transition duration-100 rounded-xl relative w-full flex justify-start items-center mb-3">
                    <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'folder-open'" class="w-full h-full" /></span>{{ collection.title }}
                </nuxt-link>
                <nuxt-link v-else :to="`settings/collections/${collection.id}`" class="py-4 px-5 border border-transparent hover:border-black/10 transition duration-100 rounded-xl relative w-full flex justify-start items-center">
                    <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'folder'" class="w-full h-full" /></span>{{ collection.title }}
                </nuxt-link>
            </li>
            
            <!-- <li>
                <button class="py-4 px-5 border border-transparent hover:border-black/10 transition duration-100 rounded-xl relative w-full flex justify-start items-center">
                    <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'folder'" class="w-full h-full" /></span>Los Angeles
                </button>
            </li>
            <li>
                <button class="py-4 px-5 border border-transparent hover:border-black/10 transition duration-100 rounded-xl relative w-full flex justify-start items-center">
                    <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'folder'" class="w-full h-full" /></span>New York
                </button>
            </li> -->

            <li>
                <input type="text" v-model="newCollection.title" @keyup.enter.prevent="createCollection" class="py-4 px-5 focus:outline-none w-full text-left hover:bg-white-100 text-black rounded-xl" placeholder="+ new collection">
            </li>
        </ul>
    </nav>
</template>

<script>
import { unWrap } from '~/utils/fetchUtils'

export default {
    props: {
        current: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            workflows: [],
            collections: [],
            newWorkflow: { title: null },
            newCollection: { title: null },
        }
    },
    mounted() {
        this.workflows = this.setWorkflowsList()
        this.collections = this.setCollectionsList()
    },
    methods: {
        async setWorkflowsList(){
            this.workflows = (await unWrap(await fetch(`/api/workflows/listing`))).json
        },
        async setCollectionsList(){
            this.collections = (await unWrap(await fetch(`/api/collections/listing`))).json
        },
        async createWorkflow() {
            await fetch('/api/workflows', {
                method: 'POST',
                body: JSON.stringify(this.newWorkflow),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        async createCollection() {
            await fetch('/api/collections', {
                method: 'POST',
                body: JSON.stringify(this.newCollection),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    // Get workflows
    // get collections
}
</script>