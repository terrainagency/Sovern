<template>
    <main class="flex bg-[#ffffff]">
        <div class="w-24 border-r border-black/10 h-screen flex justify-center pt-5">
            <SovernLogo v-bind:size="`w-8 h-8`" />
        </div>
        <section class="w-1/3 h-screen border-r px-2 pt-5 border-black/10">
            <header class="h-8 flex items-center mb-10 px-3 font-bold">Photoshoots</header>

            <h3 class="pl-3 font-bold text-xl mb-3">Upcoming (1)</h3>
            <ul> 
            <li v-for="photoshoot in photoshoots" :key="photoshoot.id" class="shadow-sm rounded-xl mb-2 px-6 py-5 border border-black/10 hover:shadow-md transition duration-150 cursor-pointer">
                <div class="w-full flex justify-between items-center mb-3">
                    <div class="flex-grow flex">
                        <div class="mr-3">{{ photoshoot.clientName }}</div>
                        <div class="text-warning text-xs uppercase tracking-widest"><span class="inline-block h-2 w-2 rounded-full bg-warning mr-2"></span></div>
                    </div>
                    <div class="rounded-full bg-success px-3 text-success bg-opacity-10 uppercase text-xs tracking-widest flex items-center">1 day</div>
                </div>
                <p class="text-gray mb-0 text-sm uppercase tracking-widest">12:00 PM - 2:00 PM</p>
                <p class="mb-0">{{ photoshoot.price }}</p>
                
                
            </li>
            </ul>
            <div class="mt-10">
                <!-- Past photoshoots and cancelled photoshoots -->
                <h3 class="pl-3 font-bold text-xl mb-3 opacity-30 hover:opacity-100 transition duration-150" role="button">Archived (0)</h3>
            </div>
                        

        </section>
        <section class="flex-grow w-full h-screen pt-10">

                <!-- Photoshoot details go here -->
                <div class="mx-auto px-1/12">
                    <div class="max-w-xl w-full bg-[#ffffff] shadow-xl rounded-xl py-5 px-5 border border-black/10">
                        <div class="mb-10">
                            <div class="flex mb-5">
                                <div class="flex flex-wrap overflow-hidden rounded-xl shadow-xl relative">
                                    <div class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full btn btn-lg">Moodboard</div>
                                    <div v-for="image in photoshoots[0].service.featuredImages" :key="image.id" class="w-1/3">
                                        <img :src="image.url">
                                    </div>
                                </div>
                            </div>

                            <!-- Integrate google maps -->
                            <div class="font-bold mb-5 w-full bg-gray-800 rounded-xl shadow-xl py-24 opacity-50 text-center text-gray">Location</div>

                           
                        </div>
                        <div class="px-3 pb-3">
                            <h5 class="font-bold">Client</h5>
                            <!-- <div v-for="customer in photoshoots[0].customers" :key="customer.id" class="flex items-center">
                                <div class="w-12 h-12 flex items-center justify-center bg-gray-800 border border-gray/20 text-gray rounded-full bg-opacity-10 shadow-sm mr-2">DM</div>{{ customer.name }}
                            </div> -->

                            <div class="py-10">
                                <div class="font-bold mb-5">History</div>
                                <ul class="pl-4">
                                    <li class=" flex items-center py-1">
                                        <div>Call sheet</div>
                                        <div class="ml-2 rounded-full bg-success py-1 px-3 text-success bg-opacity-10 uppercase text-xs tracking-widest flex items-center">Sent</div>
                                    </li>
                                    <li class="flex items-center py-1">
                                        <div>Photoshoot</div>
                                        <div class="ml-2 rounded-full bg-success py-1 px-3 text-success bg-opacity-10 uppercase text-xs tracking-widest flex items-center">Completed</div>

                                    </li>
                                    <li class="flex items-center py-1">
                                        <div>Exported</div>
                                    </li>
                                    <li></li>

                                </ul>
                            </div>
                        
                            <div class="font-bold mb-5">Files</div>

                            <div class="btn btn-lg border border-black/10 shadow-sm hover:border-black/20 transition duration-150 rounded-lg max-w-xs">Call sheet</div>
                        </div>


                    </div>
                </div>
            
        </section>


    </main>
</template>

<script>
import { gql } from 'graphql-request'

export default {
    async asyncData({ $graphcms, params }) {
        const { photoshoots } = await $graphcms.request(
            gql`
                query GetPhotoshoots {
                    photoshoots {
                        id
                        clientName
                        service {
                            title
                            featuredImages {
                                id
                                url
                            }
                        }
                        price
                    }
                }
            `
        )

        return { photoshoots }
    }
}
</script>
