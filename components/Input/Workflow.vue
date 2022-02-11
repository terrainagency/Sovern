<template>
    <div>
       <InputUtilsDropdown :options="options" :search="true" @output="update" />
    </div>
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'
export default {
    data() {
        return {
            workflows: [],
            options: []
        }
    },
    mounted() {
        this.getWorkflows().then(() => {
            this.workflows.forEach(workflow => {
                this.options.push({
                    title: workflow.title,
                    value: workflow.id
                })
            })
        })
        
    },
    methods: {
        async getWorkflows() {
            this.workflows = (await unWrap(await fetch(`/api/workflows/listing`))).json
        },
        update(e) {
            this.$emit('output', e)
        }
    }
}
</script>
