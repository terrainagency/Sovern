<template>
    <figure class="h-full">
        <!-- Image -->
        <div v-if="aspectRatio" class="image relative w-full overflow-hidden" :class="aspectRatio" tabindex="0">
            <img class="absolute w-full h-full object-cover" :src="require(`~/assets/images/${image.src}`)">
        </div>  
        <div v-else class="image relative h-full overflow-hidden" tabindex="0">
            <img class="w-full h-full object-cover" :src="require(`~/assets/images/${image.src}`)">
        </div>

        <!-- Credits -->
        <figcaption v-if="image.credits" class="credits relative pt-4 transition duration-300 transform -translate-y-2 opacity-0">
            <span v-for="(value, propertyName) in image.credits" :key="value.objectID" class="mb-1 text-xs uppercase tracking-widest"><b>{{ propertyName }}</b> {{ value }} </span>
        </figcaption>
    </figure>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            required: true
        },
        aspectRatio: {
            type: String,
            required: false
        }
    }
}
</script>
