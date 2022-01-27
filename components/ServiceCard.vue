<template>
    <figure class="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden pb-10 mb-10 mx-5">
        <div class="flex flex-wrap mb-8">
            <div v-for="image in service.featuredImages" :key="image.id" class="w-1/3">
                <img :src="image.url">
            </div>
        </div>
        <div class="px-10">
            <header class="mb-8 text-center">    
                <h3 class="font-bold text-4xl mb-2">{{ service.title }}</h3>
                <p class="uppercase text-xs tracking-widest font-bold text-gray">Starting at $475</p>
            </header>
            

            <NuxtLink v-if="service.isAvailable" :to="`/packages/${collectionSlug}/${service.slug}`" class="btn btn-lg btn-primary w-full max-w-xs mx-auto">Select</NuxtLink>
            <button v-else class="w-full btn btn-lg btn-secondary max-w-xs mx-auto">Join Waitlist</button>
            <!-- <select name="pricingOption" id="">
                <option value="">Pricing</option>
                <option v-for="option in service.pricingOptions" :key="option.id" :value="`${option.description} - ${option.pricde}`" class="btn btn-lg btn-secondary">{{ option.description }} - ${{ option.price }}</option>
            </select> -->

            <p class="font-light my-10">{{ service.description.text }}</p>
            <ul>
                <li class="flex justify-between border-t py-3 border-gray-800"><span class="text-gray font-light">Additional photos</span><span>${{ service.additionalPhotos }}</span></li>
                <li class="flex justify-between border-t py-3 border-gray-800"><span class="text-gray font-light">Cropping</span><span>{{ service.cropping }}</span></li>
                <li class="flex justify-between border-t py-3 border-gray-800"><span class="text-gray font-light">Aspect Ratio</span><span>{{ service.aspectRatio }}</span></li>
            </ul>
        </div>
    </figure>
</template>

<script>
export default {
    props: {
        collectionSlug: {
            type: String,
            required: true
        },
        service: {
            type: Object,
            required: true
        }
    }
}
</script>
