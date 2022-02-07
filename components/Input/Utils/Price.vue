<template>
    <div class="relative mb-2 flex items-center">
        <!-- <input type="text" v-model="price" class="absolute left-8"> -->
        <input type="number" class="input input-md" ref="priceInput" placeholder="Price" v-on:click="addCurrency">
        <div v-show="showCurrency" class="absolute left-5 top-1/2 transform -translate-y-1/2">{{ currency }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            price: '',
            currency: '$',
            showCurrency: false
        }
    },
    methods: {
        addCurrency() {
            const target = this.$refs.priceInput
            // target.classList.add('pl-8')
            this.showCurrency = true

            target.addEventListener("keyup", () => {
                this.price = parseInt(target.value).toLocaleString('en-US')
            })
        }
    }
}
</script>