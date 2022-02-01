<template>
    <div>
        <InputUtilsDropdown v-bind:options="timingOptions" @update-value="updateTiming" />

        <InputUtilsDropdown v-bind:options="whenOptions" @update-value="updateWhen" />

        <InputUtilsDropdown v-bind:options="referenceOptions" @update-value="updateReference" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            timingOptions: ["Immediately", "12 hours", "24 hours", "48 hours", "72 hours", "1 week", "2 weeks", "3 weeks", "1 month", "2 months", "3 months", "4 months", "6 months", "1 year"],
            whenOptions: ["when", "before", "after"],
            referenceOptions: ["Project created", "Event Starts", "Event Ends"],
            action: {
                timing: null,
                when: null,
                reference: null
            }
        }
    },
    methods: {
        updateTiming(e) { this.action.timing = e; this.$emit('update-value', this.action) },
        updateWhen(e) { this.action.when = e; this.$emit('update-value', this.action) },
        updateReference(e) { this.action.reference = e; this.$emit('update-value', this.action) },
    }
}
</script>