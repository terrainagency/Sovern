<template>
    <textarea @input="resize" @blur="blur" @keyup.enter="blur" @keyup.delete="resize" v-model="value" ref="textarea" :class="singleLine ? `textarea-single textarea-sm bg-transparent focus:outline-none`: `textarea-sm bg-transparent focus:outline-none`" :placeholder="placeholder"></textarea>  
</template>

<script>
export default {
    props: {
        singleLine: {
            type: Boolean,
            required: false
        },
        placeholder: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            value: null
        }
    },
    methods: {
        resize(e) {
            if(!this.singleLine) {
                e.target.style.height = "auto"
                e.target.style.height = `${e.target.scrollHeight}px`
            } else {
                // If scrollHeight > x, height = auto, else height = 2.625rem
                console.log(e.target.scrollHeight)
                e.target.scrollHeight <= 64 ? e.target.style.height = "2.625rem" : e.target.style.height = "auto"
                e.target.style.height = `${e.target.scrollHeight}px`
            }
            this.$emit('output', this.value)
        },
        blur(e) {
            this.$emit('update-value', e.target.value)
        }
    }
}
</script>
