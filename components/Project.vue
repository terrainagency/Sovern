<template>
    <div class="max-w-xl w-full bg-[#ffffff] shadow-xl rounded-xl py-5 px-5 border border-black/10">
        <div class="mb-10">
            <div class="flex mb-5">
                <div class="flex flex-wrap overflow-hidden rounded-xl shadow-xl relative">
                    <div class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full btn btn-lg">Moodboard</div>
                    <div v-for="image in project.service.featuredImages" :key="image.id" class="w-1/3">
                        <img :src="image.url">
                    </div>
                </div>
            </div>

            <!-- Integrate google maps -->
            <div ref="map" class="w-full h-48 rounded-xl shadow-lg"></div>

            
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
</template>
<script>
export default {
    props: {
        project: Object,
        required: true
    },
    mounted() {
        this.$maps.showMap(this.$refs.map, '30.2624018', '-97.727721')
    }
}
</script>
