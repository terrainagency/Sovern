<template>
    <div class="relative mb-2 flex items-center">
        <input type="text" v-model="price" class="hidden">
        <!-- <input type="text" v-model="price" class="absolute left-8"> -->
        <span class="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
        <input type="text" pattern="[0-9]+([\.,][0-9]+)?" @input="updateBase" v-model="base" class="input input-md pl-6 mr-2 w-24 text-right" placeholder="Price">
        .
        <input type="number" @input="preventSpill" @blur="updateChange" v-model="change" class="input input-md ml-2 w-14 text-center" value="00">
        <!-- <div v-show="showCurrency" class="absolute left-5 top-1/2 transform -translate-y-1/2">{{ currency }}</div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            price: '',
            base: '',
            change: '',
            currency: '$',
            showCurrency: false
        }
    },
    methods: {
        addCurrency() {
            // const target = this.$refs.priceInput
            // target.classList.add('pl-8')
            this.showCurrency = true

            // target.addEventListener("keyup", () => {
            //     this.price = parseInt(target.value).toLocaleString('en-US')
            // })
        },
        updateBase(e) {
            if(e.target.value.length > 0) {
                let val = parseInt(e.target.value.replace(/,/g, '')).toLocaleString('en-US')
                // Resize
                
                e.target.value = val
            }
            if(e.target.value.length > 6) {
                e.target.style.width = (e.target.value.length) + 3 + 'ch'
            }
            this.updatePrice()
        },
        preventSpill(e) {
            if(e.target.value.length === 2) e.target.blur()
        },
        updateChange(e) {
            if(this.change.length > 2) this.change.value = parseInt(this.change)
            if(this.change.length < 2) this.change.value = this.change*10
            this.updatePrice()
        },
        updatePrice() {
            this.price = parseFloat(`${this.base}.${this.change}`)
            this.$emit('output', this.price)
        }
    }
}
</script>