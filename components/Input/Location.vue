<template>
    <div class="relative rounded-xl shadow-xl bg-white-200 px-6 py-8 overflow-hidden">
    
        <div ref="map" class="absolute top-0 left-0 right-0 bottom-0"></div>
            <!-- <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-gray transition duration-150 font-normal shadow-md rounded-full py-2 px-4">Get directions</span> -->
        <input @changed="updateAddress" class="relative input-sm bg-white shadow-lg rounded-full border-white-200 w-full focus:outline-none" type="text" ref="locationSelector" autocomplete="off" placeholder="Location">

    </div>

    
</template>
<script>
export default {
    props: {
        input: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            location: {
                address: '',
                longitude: '',
                latitude: ''
            }
        }
    },
    mounted() {
        if(this.input) this.location.address = this.input
        this.$maps.makeAutoComplete(this.$refs.locationSelector, ['address'])
    },
    methods: {
        updateAddress(event) {
            const geo = event.detail.geometry.location
            this.location.latitude = geo.lat()
            this.location.longitude = geo.lng()

            this.location.address = event.target.value

            this.$maps.showMap(this.$refs.map, this.location.latitude, this.location.longitude)

            this.$emit('output', this.location)
        },
    }
}
</script>