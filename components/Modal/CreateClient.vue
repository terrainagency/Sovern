<template>
    <div @click.self="close" class="fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm bg-black/5">
        <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-black z-50 rounded-3xl shadow-xl drop-shadow-2xl text-white p-8">
            <div class="relative overflow-hidden rounded-2xl h-20 w-20 bg-conic flex items-center justify-center mb-14">
                <img src="~/assets/images/holo-gradient-1.jpg" class="absolute w-full h-full object-cover">
                <span class="relative text-xl font-bold">{{ client.firstName.slice(0,1) }}{{ client.lastName.slice(0,1) }}</span>
            </div>
            
            <div class="mb-4 text-4xl flex items-end">
                <input v-model="client.firstName" type="text" @input="resizeInput($event, '70px')" placeholder="First" class="bg-transparent w-[70px] focus:outline-none mr-3"><span class="whitespace-pre absolute overflow-hidden h-0"></span>
                <input v-model="client.lastName" type="text" @input="resizeInput($event, '70px')" placeholder="Last" class="bg-transparent w-[70px] focus:outline-none mr-3"><span class="whitespace-pre absolute overflow-hidden h-0"></span>
                <input v-model="client.pronouns" type="text" class="text-base bg-transparent focus:outline-none text-gray" placeholder="Pronouns">
            </div>
            <div>
                
                <input type="text" v-model="client.company" class="bg-transparent focus:outline-none mb-1" placeholder="Company">
            </div>
            <div class="flex w-full">
                <InputUtilsPhone />
                <!-- <input type="tel" @input="resizeInput" class="w-[70px] bg-transparent focus:outline-none" placeholder="Phone"><span class="whitespace-pre absolute overflow-hidden h-0"></span> -->

                <input v-model="client.email" type="email" @input="resizeInput($event, '70px')" class="w-[70px] bg-transparent focus:outline-none ml-6" placeholder="Email"><span class="whitespace-pre absolute overflow-hidden h-0"></span>
            </div>
            

            <button @click.prevent="createClient" class="absolute left-1/2 transform -translate-x-1/2 -bottom-5 h-10 bg-white rounded-full text-black/40 hover:text-black px-10 shadow-lg">Create</button>
            
        </div>
        {{ client }}

        
    </div>
</template>
<script>
import { resizeInput } from '~/utils/forms'
export default {
    data() {
        return {
            show: false,
            client: {
                image: '',
                firstName: '',
                lastName: '',
                pronouns: '',
                company: '',
                phone: '',
                email: ''
            },
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        resizeInput(e, width) { resizeInput(e, width )},
        async createClient() {
            await fetch('/api/clients', {
                method: 'POST',
                body: JSON.stringify(this.client),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
}
</script>