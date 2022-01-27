<template>
<div>
    <BookingHeader />

    <div class="text-center mb-10">
        <a href="/bookings">Bookings</a> / {{ collection.title }}
    </div>

    <!-- If services are available -->
    <div v-if="collection.available">
        <main class="md:mx-1/12" :class="{ 'lg:mx-2/12': collection.services.length == 3, 'lg:mx-3/12': collection.services.length != 3 }">

            <!-- Packages -->
            <div class="flex flex-wrap justify-center md:-mx-8 overflow-x-hidden mb-14 md:mb-20">
                <article v-for="service in collection.services" :key="service.objectID" class="w-full md:w-1/2 px-3 md:px-4 mb-10" :class="{ 'lg:w-1/3': collection.services.length == 3 }">
                    <ServiceCard :service="service" :slug="collection.slug" />
                </article>
            </div>
        </main>
    </div>

    <div v-else>
        <Waitlist :title="collection.title" :frequency="collection.frequency" />
    </div>
    <BookingFooter />
</div>
</template> 

<script>
import collections from '~/data/collections'

export default {
    data(){
        return {
            collection: {}
        }
    },
    created(){
        const collection = collections.find((collection) => collection.slug == this.$route.params.id)
        this.collection = collection
    }
}
</script>
 