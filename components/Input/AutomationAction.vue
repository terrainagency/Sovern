<template>
    <div>
        <InputUtilsDropdown v-bind:options="timingOptions" @update-value="updateTiming" />

        <InputUtilsDropdown v-bind:options="whenOptions" @update-value="updateWhen" />

        <InputUtilsDropdown v-bind:options="referenceOptions" @update-value="updateReference" />
    </div>
</template>

<script>
import { unWrap } from '~/utils/fetchUtils'

export default {
    props: {
        workflowID: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            timingOptions: ["Immediately", "12 hours", "24 hours", "48 hours", "72 hours", "1 week", "2 weeks", "3 weeks", "1 month", "2 months", "3 months", "4 months", "6 months", "1 year" ],
            whenOptions: ["after", "before", "when"],
            referenceOptions: [
                { title: "Project created", value: "#project_created" },
                { title: "Event starts", value: "#event_start" },
                { title: "Event ends", value: "#event_end"}
            ],
            action: {
                timing: null,
                when: null,
                reference: null,
                preset: null
            },
        }
    },
    mounted() {
        this.setReferenceOptions()
    },
    methods: {
        updateTiming(e) { 
            if(e === "Immediately") {
                this.whenOptions.filter(value => value !== "when")
            }
            this.action.timing = e; this.$emit('update-value', this.action) 
        },
        updateWhen(e) { this.action.when = e; this.$emit('update-value', this.action) },
        updateReference(e) { 
            if(e.match(/^\#/gm)) {
                e = e.replace(/^\#/gm, '')
                this.action.reference = null
                this.action.preset = e
            } else {
                this.action.preset = null
                this.action.reference = e; 
            }
            this.$emit('update-value', this.action) 
        },
        async setReferenceOptions() {
            this.queriedReferenceOptions = (await unWrap(await fetch(`/api/automations/${this.workflowID}`))).json
            this.queriedReferenceOptions.forEach(option => {
                let obj = { title: option.title, value: option.id }
                this.referenceOptions.push(obj)
            })
        }
    }
}
</script>