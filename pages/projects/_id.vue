<template>
    <Project :id="this.$route.params.id" />
    <!-- <div>{{ project }}</div> -->
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'

export default {
    layout: 'project',
    data() {
        return {
            project: undefined,
        }
    },
    mounted() {
        this.getProject(this.$route.params.id)
    },
    methods: {
        async getProject(id) {
            this.project = (await unWrap(await fetch(`/api/projects/?id=${id}`))).json
        }
    }
}
</script>