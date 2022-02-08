<template>
    <div class="relative">
        <button v-if="!search" v-on:click.prevent="showList = true" class="input input-md mb-2">{{ selectedTitle }}</button>
        <input v-else type="text" @click.prevent="showList = true" @keyup="filter" class="input input-md mb-2" v-model="selectedTitle" :placeholder="placeholder">

        <div :class="showList?'z-50 absolute w-full bg-white border rounded-md border-black/10 shadow-lg max-h-48 overflow-y-scroll':'hidden'">
            <div v-for="(option, i) in filteredOptions" :key="`${i}-${_uid}-${option.value}`" class="">
                <input type="radio" name="selection" :id="`${_uid}${option.value}${i}`" @change="selectOptionWithValues(option, i)" v-model="selectedValue" />
                <label :for="`${_uid}${option.value}${i}`" class="dropdown flex justify-between py-2 hover:bg-white-100 select-none px-3 text-sm">{{ option.title }}</label>
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
        },
        search: {
            type: Boolean,
            default: false,
            required: false
        },
        placeholder: {
            type: String,
            default: '',
            required: false
        }
    },
    data() {
        return {
            showList: false,
            selectedTitle: '',
            selectedValue: null,
            filteredOptions: this.options
        }
    },
    watch: {
        options: function() {
            this.filteredOptions = this.options
        }
    },
    methods: {
        selectOptionWithValues(option, i) {
            this.selectedTitle = option.title
            this.selectedValue = option.value
            this.$emit('update-value', this.selectedValue)
            this.showList = false
        },
        filter(e) {
            const value = e.target.value
            let regex = new RegExp(value, 'gi')

            this.filteredOptions = this.options.filter(obj => obj.title.match(regex))
        },
        clear() {
            console.log("CLEAR DROPDOWN")
            this.selectedValue = ''
            this.selectedTitle = ''
            this.filteredOptions = this.options
        }
    }
}
</script>