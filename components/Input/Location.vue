<template>
    <div class="relative rounded-xl shadow-xl bg-white-200 px-6 py-8 overflow-hidden">
    
        <div ref="map" class="absolute top-0 left-0 right-0 bottom-0"></div>
            <!-- <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-gray transition duration-150 font-normal shadow-md rounded-full py-2 px-4">Get directions</span> -->
        <input class="relative input-sm bg-white shadow-lg rounded-full border-white-200 w-full" type="text" ref="locationSelector" v-model="address" autocomplete="off" placeholder="Location" v-on:changed="updateAddress">

    </div>

    
</template>
<script>
export default {
    data() {
        return {
            address: '',
            longitude: '',
            latitude: ''
        }
    },
    mounted() {
        this.$maps.makeAutoComplete(this.$refs.locationSelector, ['address'])
    },
    methods: {
        updateAddress(event) {
            // const addressParts = event.detail.address_components
            // const street = this.getAddressPart(addressParts, 'street_number')?.short_name || ''
            const geo = event.detail.geometry.location
            this.latitude = geo.lat()
            this.longitude = geo.lng()

            this.$maps.showMap(this.$refs.map, this.latitude, this.longitude)
        },
        getAddressPart(parts, type) {
            return parts.find(part => part.types.includes(type))
        }
    }
}
</script>