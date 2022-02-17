<template>
    <div v-if="!loaded" class="p-4 pointer-events-none">
        <div class="h-8 w-8"><div class="spinner"></div></div>
    </div>
</template>
<script>
export default {
    props: {
        loaded: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        ready(){
            this.loaded = true
        }
    }
}
</script>


