<template>
    <div @click.prevent="$emit('showModal', false)" class="absolute top-0 right-0 bottom-0 left-0 bg-black/10 flex items-center justify-center">


        <div v-if="project" @click.stop="" class="w-full max-w-lg p-6 bg-white rounded-3xl shadow-xl">


            <nuxt-link :to="`/moodboards/${project.moodboard.id}`" class="hover-span-to-black rounded-xl overflow-hidden shadow-md flex relative mb-2">
                <div v-for="image in project.moodboard.moodboardImages" :key="image.url" class="w-1/2 h-full">
                    <img :src="image.url" />
                </div>
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-gray transition duration-150 font-normal shadow-md rounded-full py-2 px-4">Moodboard</span>
            </nuxt-link>
            
            <div v-if="project.geoLocation" class="relative">
                <div ref="map" class="w-full h-36 rounded-xl shadow-md border border-white-200 mb-4"></div>
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-gray transition duration-150 font-normal shadow-md rounded-full py-2 px-4">Get directions</span>

            </div>
            
            <div class="font-bold">Client</div>

            <ul v-for="client in project.clients" :key="client.id" class="mb-4">
                    <li>{{ client.name }}</li>
                </ul>
            <div class="mb-4">
                <div class="font-bold">Package</div>
                

                <p>Clean Beauty - 2 Looks 4 Photos <br>

                
                <!-- Time -->
                12/34/22 <span>{{ project.startTime }} - {{ project.endTime }}</span> <br>


                {{ project.address }}</p>

                <!-- Workflow -->
                <!-- Package -->
                <!-- Price -->
                
            </div>

            <p><b>Links</b></p>
            <button class="border border-white-200 rounded-xl flex items-center p-2 w-full hover:bg-white-100 transition duration-150 mb-1">
                <div class="mr-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png" alt="" class="w-6 h-6">
                </div>
                 @meilizheng
            </button>
            <button class="border border-white-200 rounded-xl flex items-center p-2 w-full hover:bg-white-100 transition duration-150 mb-1">
                <div class="mr-2">
                    <img src="https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png" alt="" class="w-6 h-6">
                </div>
                 Google drive
            </button>

            <!-- <p><b>History</b></p>  -->
            <!-- Next step -->
            <!-- Expand -->


            <!-- Tasks -->
            <!-- Files -->
        </div>
        
    </div>
</template>
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            componentKey: 0
        }
    },
    mounted() {
        if(this.project.geoLocation) {
            this.$maps.showMap(this.$refs.map, this.project.geoLocation.latitude, this.project.geoLocation.longitude)
        }
    },
    methods: {
        forceRerender() {
        this.componentKey += 1;
        }
    }
    // Get proejct by ID
}
</script>
