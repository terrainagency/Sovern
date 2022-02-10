<template>
    <div class="flex items-center">
        <InputUtilsDropdown :options="countries" classes="mr-2" :default="countries[0]">
            <!-- <Flag code="US" :hasBorder="false" class="mr-2" /> -->
        </InputUtilsDropdown>

        <input @input="validate" type="tel" v-model="digits" class="bg-transparent focus:outline-none w-28" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            countries: [
                {title: "+1", value: "United States"}
            ],
            country: '+1',
            digits: '',
            output: ''
        }
    },
    methods: {
        validate(e) {
            // let val = e.target.value
            this.digits = this.digits.replace(/^\s*([0-9]{3})\s*\-?([0-9]{3})\s*\-?([0-9]{4})$/, '$1 $2 $3');
            this.output = `${this.country}${this.digits}`
        }
    }
}
</script>
