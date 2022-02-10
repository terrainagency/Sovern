<template>
    <div class="flex flex-col items-center">
        <div class="fixed top-0 right-0 left-0 bottom-0 -z-10">
            <!-- <img src="~/assets/images/banner_dark.jpg"> -->
        </div>
        <BookingHeader></BookingHeader>

        <section class="bg-white shadow-2xl rounded-xl p-12 w-full max-w-lg">
           <h1 class="text-5xl mb-5 text-center font-bold">Packages</h1>
            <div class="pt-5 pb-8">
                <p>1. Pick your city</p>

                <ul class="overflow-x-hidden">
                    <li v-for="collection in collections" :key="collection.id" class="flex -mx-1">
                        <div ref="confirmInput" class="confirm-input flex-shrink-0 w-full px-1 transition duration-300">
                            <input type="radio" name="collection" :id="collection.id" class="" :value="collection.title">
                            <label :for="collection.id" class="checkbox">{{ collection.title }}</label>
                        </div>
                        <div class="flex-shrink-0 w-1/2 px-1">
                            <a class="block btn-input w-full" :href="`/packages/${ collection.slug }`">Confirm</a>
                        </div>
                    </li>
                </ul>

                <p class="mt-3 mb-0 font-light">Don't see your city? Join the <a href="/waitlist">waitlist</a> and we'll notify you if bookings become available in your city.</p>

            </div>
        </section>



    </div>
</template>


<script>
import { gql } from 'graphql-request'

export default {
    data: {

    },
    async asyncData({ $graphcms }) {

        const { collections } = await $graphcms.request(
            gql`
                query Getcollections {
                    collections(where: {isPublic: true}) {
                        id
                        title
                        slug
                    }
                }
            `
        )

        return { collections }
    },
    mounted() {
        // this.$refs.confirmInput.forEach(input => {
        //     let radio = input.children[0];
        //     radio.addEventListener("change", e => {
        //         e.preventDefault();
        //         console.log(radio.checked);
        //         this.$refs.confirmInput.forEach(el => {
        //             el.classList.remove("active");
        //         })
        //         radio.checked === true ? input.classList.add("active") : input.classList.remove("active");
        //     })
        //     console.dir(input.children[0]);
        // })
    }
}
</script>