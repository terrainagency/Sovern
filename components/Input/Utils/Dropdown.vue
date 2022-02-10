<template>
    <div class="relative">
        <button v-if="!search" @click="open" :class="classes"><slot />{{ selectedTitle }}</button>
        <input v-else type="text" @click="open" @keyup="filter" class="input input-md mb-2" v-model="selectedTitle" :placeholder="placeholder">

        <div ref="menu" :class="show?'z-50 absolute w-full bg-white border rounded-lg border-black/10 shadow-lg max-h-48 overflow-y-scroll':'hidden'">
            <div v-for="(option, i) in filteredOptions" :key="`${i}-${_uid}-${option.value}`" class="">
                <input type="radio" :name="`${_uid}-selection`" :id="`${_uid}${option.title.replace(':', '')}${i}`" @change="selectOptionWithValues(option.title)" v-model="selectedValue" :value="option.value" />
                <label :for="`${_uid}${option.title.replace(':', '')}${i}`" class="dropdown flex justify-between py-2 hover:bg-white-100 select-none px-3 text-sm">{{ option.title }}</label>
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
        },
        classes: {
            type: String,
            required: false,
        },
        default: {
            type: Object,
            required: false,
        }
    },
    data() {
        return {
            show: false,
            selectedValue: '',
            selectedTitle: '',
            filteredOptions: this.options
        }
    },
    watch: {
        options: function() {
            this.filteredOptions = this.options
        }
    },
    mounted() {
        if(this.default) {
            this.selectedTitle = this.default.title
            this.selectedValue = this.default.value
        }
    },
    methods: {
        selectOptionWithValues(title) {
            this.selectedTitle = title
            // this.selectedValue = option.value
            console.log(this.selectedValue)
            this.$emit('update-value', this.selectedValue)
            this.show = false
        },
        open() {
            if(!this.show) window.addEventListener('click', this.close)
            this.show = true
        },
        close(e) {
            if (!this.$el.contains(e.target)) {
                this.show = false;
                window.removeEventListener('click', this.close)
            }
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