<template>
    <textarea @input="resize" @blur="blur" v-model="value" ref="textarea" class="textarea-sm"></textarea>  
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    },
    methods: {
        resize(e) {
            e.target.style.height = "auto"
            e.target.style.height = `${e.target.scrollHeight}px`
        },
        blur(e) {
            this.$emit('update-value', e.target.value)
        }
    }
}
</script>
