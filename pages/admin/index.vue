<template>
        <!-- Dashboard -->
        <div class="w-full mr-10">
            <section class="w-full bg-white-100 rounded-3xl p-8 mb-10 flex h-[32rem]">

                <div class="h-full w-1/3 max-w-xl relative flex flex-col">
                    <h2 class="font-bold mb-2">Today</h2>
                    <div class="flex-grow overflow-y-scroll scrollbar-none pb-10">
                        

                        <div v-for="project in projectList" :key="project.id" role="button" class="w-full relative rounded-2xl shadow-sm border border-gray/20 bg-white py-4 px-5 mb-2 hover:border-gray/50 transition duration-150">
                            <div class="mb-4">
                                    Client name <span class="bg-gray/20 rounded-full py-1 px-3 text-sm ml-2">1 Day</span>
                                    <div class="h-2 w-2 bg-success rounded-full absolute top-3 right-3"></div>
                            </div>
                            <div class="text-gray font-light uppercase text-sm tracking-wider">
                                {{ project.startTime }} - {{ project.endTime }}
                            </div>
                            <div class="flex justify-between">
                                <span>{{ project.service }}</span>
                                <span>{{ project.serviceOption }}</span>
                            </div>
                        </div>
                    </div>
                   

                    <div class="bg-gradient-to-t from-white-100 absolute bottom-0 left-0 right-0 h-10 pointer-events-none"></div>

                </div>


                <div class="flex-grow">
                    <h2 class="font-bold mb-2 text-center">This week</h2>
                </div>
            </section>
            


            <!--  -->
            <section class="flex">

                <div class="flex-grow mr-10">
                    <h2 class="font-bold mb-2">Tasks</h2>

                    <div class="rounded-2xl bg-success/10 w-full h-24 text-success flex items-center justify-center">
                        No tasks
                    </div>

                </div>

                <div class="w-1/3">
                    <h2 class="font-bold mb-2">Goals</h2>
                    <!-- <div v-for="project in projectList" :key="project.id" role="button" class="w-full relative rounded-2xl shadow-sm border border-gray/20 bg-white py-3 px-4 mb-2 hover:border-gray/50 transition duration-150">
                        <div class="mb-4">
                                Client name <span class="bg-gray/20 rounded-full py-1 px-3 text-sm ml-2">1 Day</span>
                                <div class="h-2 w-2 bg-warning rounded-full absolute top-3 right-3"></div>
                        </div>
                        <div class="text-gray font-light uppercase text-sm tracking-wider">
                            {{ project.startTime }} - {{ project.endTime }}
                        </div>
                        <div class="flex justify-between">
                            <span></span>
                            <span>{{ project.price }}</span>
                        </div>
                    </div> -->
                </div>
            </section>
        </div>
        <!-- <div class="w-1/3 h-[30rem] p-8 rounded-2xl border border-white-200">
            <h2 class="font-bold mb-2 text-center">Views</h2>
        </div> -->
        
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
            this.projectList = (await unWrap(await fetch('api/projects/user/'))).json
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
