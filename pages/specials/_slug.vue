<template>
<div>
    <BookingHeader />

    <div class="text-center mb-10">
        {{ special.title }}
    </div>

    <!-- If services are available -->
    <div v-if="special.available">
        <main class="md:mx-1/12" :class="{ 'lg:mx-2/12': special.services.length == 3, 'lg:mx-3/12': special.services.length != 3 }">

            <!-- Packages -->
            <div class="flex flex-wrap justify-center md:-mx-8 overflow-x-hidden mb-14 md:mb-20">
                <article v-for="service in special.services" :key="service.objectID" class="w-full md:w-1/2 px-3 md:px-4 mb-10" :class="{ 'lg:w-1/3': special.services.length == 3 }">
                    <ServiceCard :service="service" :slug="special.slug" />
                </article>
            </div>
        </main>
    </div>

    <div v-else>
        <Waitlist :title="special.title" :frequency="special.frequency" />
    </div>

    <BookingFooter />
</div>
</template>

<script>
import specials from '~/data/specials'

export default {
    data(){
        return {
            special: {}
        }
    },
    created(){
        const special = specials.find(special => special.slug == this.$route.params.slug)

        this.special = special
    }
}
</script>
 