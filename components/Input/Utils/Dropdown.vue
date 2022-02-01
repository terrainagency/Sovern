<template>
    <div class="relative">

        <button v-on:click.prevent="showList = true" class="input input-md mb-2">{{ selectedOption }}</button>

        <div v-if="showList" class="z-50 absolute w-full bg-white border rounded-md border-black/10 shadow-lg max-h-48 overflow-y-scroll scrollbar-none">
            <div v-for="(option, i) in list" :key="`list-${option}-${i}`" v-on:click="selectOption(option, i)" class="flex justify-between py-2 hover:bg-white-100 select-none px-3 text-sm">
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            list: null,
            showList: false,
            selectedOption: '-'
        }
    },
    mounted() {
        this.list = this.options
    },
    methods: {
        selectOption(value, i) {
            this.selectedOption = value
            this.$emit('update-value', this.selectedOption)
            this.showList = false
        }
    }
}
</script>