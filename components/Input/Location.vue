<template>
    <div class="mb-2">
        <input class="input input-md" type="text" ref="locationSelector" v-model="address" autocomplete="off" placeholder="Location" v-on:changed="changed">
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
        changed(event) {
            // const addressParts = event.detail.address_components
            // const street = this.getAddressPart(addressParts, 'street_number')?.short_name || ''
            const geo = event.detail.geometry.location
            this.latitude = geo.lat()
            this.longitude = geo.lng()
        },
        getAddressPart(parts, type) {
            return parts.find(part => part.types.includes(type))
        }
    }
}
</script>