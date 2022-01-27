<template>
<div>
    <BookingHeader />

    <div class="text-center mb-10">
        <nuxt-link :to="`/bookings/${collection.slug}`">{{ collection.title }}</nuxt-link>  / {{ service.title }}
    </div>

    <main class="md:px-1/12 xl:px-2/12">
        <div class="mx-3 md:mx-4 mb-6 md:mb-0">
            <div class="max-w-screen-md mx-auto rounded-xl overflow-hidden shadow-xl">
                <ServiceGallery :service="service" />
            </div>

            <div class="relative max-w-screen-md mx-auto -mt-6 md:-mt-16">
                <div class="relative bg-white mx-1/12 md:mx-3/12 shadow-2xl rounded-xl py-8 md:py-10">
                    <a href="./" class="absolute -left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer border-2 border-gray-800 hover:border-black transition duration-300">
                        <div class="border-l-2 border-b-2 border-black transform translate-x-[1px] rotate-45 w-2 h-2"></div>
                    </a>

                    <h2 class="font-bold mb-3 text-4xl text-center">{{ service.title }}</h2>
                    <div class="text-xs uppercase tracking-wider font-bold text-center">Starting at ${{ service.startingPrice }}</div>
                </div>
            </div>
        </div>
        <!-- Calendly inline widget begin -->
        <div class="calendly-inline-widget h-[1600px] lg:h-[1400px]" :data-url="`${service.calendlyForm}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=fbfbfb&text_color=000000&primary_color=000000`" style="min-width:320px;"></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        <!-- Calendly inline widget end -->
    </main>

    <BookingFooter />
</div>
</template>

<script>
import collections from '~/data/collections'

export default {
    data(){
        return {
            collection: {},
            service: {}
        }
    },
    created(){
        const collection = collections.find(collection => collection.slug == this.$route.params.service)
        const service = collection.services.find(service => service.slug == this.$route.params.slug)

        this.collection = collection
        this.service = service
    }
}
</script>
 