<template>
    <textarea @input="resize" ref="textarea" class="textarea-sm">Thank you for booking</textarea>  
</template>

<script>
export default {
    methods: {
        resize(e) {
            e.target.style.height = "auto"
            e.target.style.height = `${e.target.scrollHeight}px`
        }
    }
}
</script>
