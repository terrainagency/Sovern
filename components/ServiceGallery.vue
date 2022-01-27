<template>
    <div class="relative flex flex-wrap">
        <div v-for="image in service.images" :key="image.objectID" class="w-1/3">
            <div class="relative pb-5/4">
                <img class="absolute w-full h-full object-cover" :src="require(`~/assets/images/${image.src}`)" />
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    props: {
        service: {
            type: Object,
            required: true
        }
    }
}
</script>