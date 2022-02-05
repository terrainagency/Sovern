<template>
    <div class="w-full flex pr-1/12">
        <SettingsNavigation :current="collection.id" />
        
        <section class="w-full px-10">
            <div class="relative mx-auto flex flex-col items-center rounded-xl p-10 bg-white border border-black/5 shadow-md w-full">
                <header class="relative w-full mb-8">
                    <h1 class="font-bold text-center text-3xl flex-grow">{{ collection.title }}</h1>
                    
                    
                        <div class="flex items-center absolute top-1/2 transform -translate-y-1/2 right-0">
                            Public:
                            <InputToggle />
                        </div> 
                </header>
                                   

                <section class="">
                    <div v-for="service in collection.packages" :key="service.id">
                        {{ service }}
                    </div>
                    
                    <ModalCreateService :collectionID="collection.id" />
                </section>
    
            </div>

            

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
            collection: {},
            showCreateAutomation: false,
        }
    },
    mounted() {
        this.collection = this.setCollection(this.$route.params.id)
    },
    methods: {
        async setCollection(id){
            this.collection = (await unWrap(await fetch(`/api/collections/${id}`))).json
        },
    }
}
</script>