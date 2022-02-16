<template>
    <div v-if="show" @click.self="close()" class="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/10">
        <Loading :loaded="loaded" />

        <div :class="`relative flex flex-col max-h-[90vh] rounded-2xl shadow-xl bg-white border border-white-100`">
            <div class="overflow-y-scroll scrollbar-none">
                <slot name="body"></slot>
            </div>

            <div v-if="loaded" class="absolute -bottom-5 h-10 w-full flex">
                <slot name="nav"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        size: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            show: false,
            loaded: false,
        }
    },
    computed: {
        sizeClass: function() {
            let str = ''
            switch(this.size) {
                case 'sm': 
                    str = 'max-w-screen-sm' 
                    break
                case 'md': 
                    str = 'max-w-screen-md' 
                    break
                case 'lg': 
                    str = 'max-w-screen-lg' 
                    break
                case 'full': 
                    str = 'max-w-[90vw]' 
                    break
            }
            return str
        }
    },
    methods: {
        ready() {
            this.loaded = true
        },
        open() {
            this.loaded = false
            this.show = true
            this.$emit('open')
        },
        close() {
            this.show = false
            this.$emit('close')
        }
    }
}
</script>