<template>
<div class="w-full h-full ">
    <div class="p-8 rounded-3xl border border-white-200">
        <header class="font-bold mb-2">Upcoming ({{ projectList.length }})</header>

        <!-- Projects where Workflow.id = XXX -->
        <table class="w-full">
            <tr>
                <th>Title</th>
                <th>Date</th>
                <th class="status">Call sheet</th>
                <th class="status">Photoshoot</th>
                <th class="status">Exported</th>
                <th class="status">Proofs</th>
                <th class="status">Selections</th>
                <th class="status">Edits</th>
                <th class="status">Final confirmation</th>
            </tr>
            <tr v-for="project in projectList" :key="project.id" class="">
                <td>
                    {{ project.title }}
                </td>
                <td>
                    {{ project.date }}
                </td>
                <td class="status"><button class="bg-success text-white">Sent</button></td>
                <td class="status"><button class="bg-success text-white">Completed</button></td>
                <td class="status"><button class="bg-success text-white">Completed</button></td>
                <td class="status"><button class="bg-warning text-white">Overdue</button></td>
                <td class="status"><button class="hover:bg-white-200"> </button></td>
                <td class="status"><button class="hover:bg-white-200"> </button></td>
                <td class="status"><button class="hover:bg-white-200"> </button></td>
            </tr>

        </table>
                    <CreateProject />

        <button class="font-bold mb-2 text-gray hover:text-black">Archived (0)</button>

</div>
</div>
        
</template>

<script>
import Cookie from 'js-cookie'
import { unWrap } from '~/utils/fetchUtils'

export default {
    data() { 
        return {
            projectList: [],
            showCreateProject: false
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
