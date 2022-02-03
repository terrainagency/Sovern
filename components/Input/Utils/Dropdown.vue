<template>
    <div class="relative">
        <button v-on:click.prevent="showList = true" class="input input-md mb-2">{{ selectedTitle }}</button>


        <div v-if="showList && options[0].title" class="z-50 absolute w-full bg-white border rounded-md border-black/10 shadow-lg max-h-48 overflow-y-scroll scrollbar-none">
            <div v-for="(option, i) in list" :key="`list-${option}-${i}`" v-on:click="selectOptionWithValues(option, i)" class="flex justify-between py-2 hover:bg-white-100 select-none px-3 text-sm">
                {{ option.title }}
            </div>
        </div>

        <div v-else-if="showList">
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
            selectedTitle: '-',
            selectedValue: null
        }
    },
    mounted() {
        this.list = this.options
    },
    methods: {
        selectOption(option, i) {
            this.selectedTitle = option
            this.selectedValue = option
            this.$emit('update-value', this.selectedValue)
            this.showList = false
        },
        selectOptionWithValues(option, i) {
            this.selectedTitle = option.title
            this.selectedValue = option.value
            this.$emit('update-value', this.selectedValue)
            this.showList = false
        }
    }
}
</script>