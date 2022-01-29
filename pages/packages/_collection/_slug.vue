<template>
    <div class="mb-96"> 
        <BookingHeader v-bind:darkMode="false" />

        <main class="w-full mx-auto max-w-screen-md relative">
           <a href="./" class="absolute -left-8 top-4 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer border-2 border-gray-800 hover:border-black transition duration-300">
                    <div class="border-l-2 border-b-2 border-black transform translate-x-[1px] rotate-45 w-2 h-2"></div>
                </a>

            <div class="flex flex-wrap overflow-hidden rounded-xl shadow-xl">
                
                <div v-for="image in collection.services[0].featuredImages" :key="image.id" class="w-1/3">
                    <img :src="image.url">
                </div>
            </div>

            <header class="w-full bg-white rounded-xl p-10 max-w-lg transform -translate-y-10 mx-auto shadow-xl relative text-center">
                <h3 class="font-bold text-4xl mb-2">{{ collection.services[0].title }}</h3>
                <p class="uppercase text-xs tracking-widest font-bold text-gray">Starting at $475</p>

                <fieldset class="w-full flex-shrink-0">
                    <select v-on:change="updatePrice" class="shadow-md mb-0 mt-3" name="serviceOption" v-model="serviceOption">
                        <option :value="undefined">Select a pricing option</option>
                        <option v-for="option in collection.services[0].serviceOptions" :key="option.id" :value="`${ option.description }-$${ option.price }`">{{ option.description }} <span v-if="option.isRecommended">(Recommended)</span> - ${{ option.price }}</option>
                    </select>                        
                </fieldset>
            </header>

            <div class="w-full bg-white rounded-xl p-10 max-w-lg mx-auto shadow-xl" v-if="serviceOption">
                <form v-on:submit.prevent="createProject" class="">
                    <fieldset class="w-full mr-36 pb-8 flex-shrink-0">
                        <p class="mb-3">1. Contact info</p>

                        <input type="text" name="name" placeholder="Name" v-model="clientName">
                        <input type="text" name="instagram" placeholder="Instagram" v-model="clientInstagram">
                        <div class="mb-5">
                            <input type="tel" name="phone" placeholder="Phone" v-model="clientPhone">
                            <input type="email" name="email" placeholder="Email" v-model="clientEmail">
                            <input type="email" name="agentEmail" placeholder="Agent's Email" v-model="agentEmail">
                        </div>
                    </fieldset>

                    <fieldset class="w-full mr-36 pb-8 flex-shrink-0">
                        Price:
                        <input type="text" name="price" :value="`${price}.00`" disabled />
                        Address:
                        <input type="text" name="address" :value="collection.address" disabled />
                    </fieldset>

                    <fieldset class="w-full mr-36 pb-8 flex-shrink-0">
                        <p class="mb-3">2. Select a time</p>

                        <DatePicker v-on:clicked-end-time="updateTimes" :startDate="collection.startDate" :endDate="collection.endDate" :timeSlots="collection.services[0].timeSlots" :schedulingRange="collection.services[0].schedulingRange" :schedulingBuffer="collection.services[0].schedulingBuffer" :duration="collection.services[0].duration" :isAvailable="collection.services[0].isAvailable" timezone="0600" />
                    </fieldset>

                                    <input type="submit" class="btn btn-lg btn-primary mx-auto" />

                </form>

                <!-- <nav>
                    <ul class="flex justify-center mb-5">
                        <li class="rounded-full mx-2 bg-black h-4 w-4 flex items-center justify-center shadow-md"><div class="rounded-full h-1 w-1 bg-white"></div></li>
                        <li class="rounded-full mx-2 h-4 w-4 flex items-center justify-center"><div class="rounded-full h-1 w-1 bg-black opacity-20"></div></li>
                        <li class="rounded-full mx-2 h-4 w-4 flex items-center justify-center"><div class="rounded-full h-1 w-1 bg-black opacity-20"></div></li>
                    </ul>
                </nav>
                <button class="btn btn-lg btn-primary mx-auto">Next</button> -->


                </div>


        </main>
    </div>
</template>

<script>
import { GraphQLClient, gql } from 'graphql-request'

export default {
    data() {
        return {
            clientName: '',
            clientInstagram: '',
            clientPhone: '',
            clientEmail: '',
            serviceOption: undefined,
            price: '',
            agentEmail: '',
            address: ''
        }
    },
    async asyncData({ $graphcms, params }) {
        const { collection } = await $graphcms.request(
            gql`
                query GetServices($collectionSlug: String, $serviceSlug: String) {
                    collection(where: {slug: $collectionSlug}) {
                        title
                        startDate
                        endDate
                        address
                        services(where: {slug: $serviceSlug}) {
                            id
                            title
                            timeSlots
                            duration
                            schedulingRange
                            schedulingBuffer
                            isAvailable
                            featuredImages {
                                id
                                url
                            }
                            serviceOptions {
                                id
                                price
                                description
                                isRecommended
                            }
                        }
                    }
                }
            `,
             { collectionSlug: params.collection, serviceSlug: params.slug }
        )

        return { collection }
    },
    methods: {
        updatePrice() {
            this.price = this.serviceOption.split("-")[1]
        },
        updateTimes(obj) {
            this.startTime = obj.startTime
            this.endTime = obj.endTime
            console.log(this.collection.services[0])
        },
        async createProject() {
            const graphQLClient = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/cktunnv680pby01w52lp7c0xv/master')

            const mutation = gql`
                mutation AddProject(
                    $clientName: String!, 
                    $clientInstagram: String!, 
                    $clientPhone: String!, 
                    $clientEmail: String!, 
                    $agentEmail: String!, 
                    $address: String!, 
                    $startTime: String!, 
                    $endTime: String!, 
                    $price: String!, 
                    $service_id: ID) 
                {
                    createProject(
                        data: {
                            clientName: $clientName, 
                            clientInstagram: $clientInstagram, 
                            clientPhone: $clientPhone, 
                            clientEmail: $clientEmail, 
                            agentEmail: $agentEmail, 
                            address: $address, 
                            startTime: $startTime, 
                            endTime: $endTime, 
                            price: $price, 
                            service: {
                                connect: {
                                    id: $service_id
                                }
                            }
                        }
                    ){
                        clientName
                        clientInstagram
                        clientPhone
                        clientEmail
                        agentEmail
                        address
                        startTime
                        endTime
                        price
                        id
                    }
                }
            `
            const variables = {
                clientName: this.clientName,
                clientInstagram: this.clientInstagram,
                clientPhone: this.clientPhone,
                clientEmail: this.clientEmail,
                agentEmail: this.agentEmail,
                address: this.collection.address,
                startTime: this.startTime,
                endTime: this.endTime,
                price: this.price,
                service_id: this.collection.services[0].id
            }
            const data = await graphQLClient.request(mutation, variables)
            console.log(JSON.stringify(data, undefined, 2))
        },
        mounted() {
            createProject().catch((error) => console.error(error))
        }
    }
}
// import { gql } from 'graphql-request'

// export default {
//   async asyncData({ $graphcms, params, redirect }) {
//     const { service } = await $graphcms.request(
//         gql`
//             query GetCollections {
//                 collections {
//                     title
//                     slug
//                 }
//             }
//         `
//     )
//     console.log(params)
//     return { service }
//   }
// }
</script>