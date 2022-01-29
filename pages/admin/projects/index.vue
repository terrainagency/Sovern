<template>
<div class="w-full h-full">
        <table class="w-full pb-7">
            <tr>
                <th>Project</th>
                <th>Call sheet</th>
                <th>Photoshoot</th>
                <th>Exported</th>
                <th>Proofs</th>
                <th>Selections</th>
                <th>Edits</th>
                <th>Final confirmation</th>
            </tr>
            <tr v-for="project in projectList" :key="project.id" class="py-4 px-5 transition duration-150">
                <td>
                    {{ project.title }}
                </td>
                <td class="bg-success/10 text-success status">
                    Completed
                </td>
                <td class="bg-success/10 text-success status">
                    Completed
                </td>
                <td class="bg-warning/10 text-warning status">
                    Behind
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <!-- <CreateProject /> -->
        </table>
            <button class="btn btn-lg btn-primary rounded-full mx-auto relative -top-7">+</button>


</div>
        
</template>

<script>
import Cookie from 'js-cookie'
import { unWrap } from '~/utils/fetchUtils'

export default {
    data() { 
        return {
            projectList: []
        }
    },
    mounted() {
        this.setProjectsList()
    },
    methods: { 
        async setProjectsList(){
            this.projectList = (await unWrap(await fetch('/api/projects/user/'))).json
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
