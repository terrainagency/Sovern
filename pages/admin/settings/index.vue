<template>
    <div class="w-full overflow-x-hidden flex">
        <SettingsNavigation :current="'none'" />

    </div>
</template>

<script>
import Cookie from 'js-cookie'
import { unWrap } from '~/utils/fetchUtils'

export default {
    layout: 'settings',
    data() {
        return {
            // workflows: []
        }
    },
    mounted() {
        // this.setWorkflowsList();
    },
    methods: {
        // async setWorkflowsList(){
        //     this.workflows = (await unWrap(await fetch('/api/workflows/listing/user'))).json
        // },
    },
    asyncData({ $config, redirect }){
        if(!Cookie.get($config.auth.cookieName)){
            redirect('/no-acces/')
            return
        }
    }
}
</script>
