<template>
    <div v-if="show" @click.self="close()" class="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/10">
        <div :class="`relative flex flex-col w-full ${sizeClass} max-h-[90vh] rounded-xl shadow-xl bg-white border border-white-100`">
            <div class="overflow-y-scroll scrollbar-none">
                <slot name="body"></slot>
            </div>
            <div class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 h-10 flex">
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
            show: false
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
        open() {
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