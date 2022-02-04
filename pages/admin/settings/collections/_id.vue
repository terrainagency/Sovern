<template>
    <div class="w-full flex pr-1/12">
        <SettingsNavigation :current="collection.id" />
        
        <section class="relative max-w-screen-lg mx-auto flex flex-col items-center  z-0">
            <h1 class="font-bold text-center mb-10">{{ collection.title }}</h1>

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