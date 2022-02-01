<template>
    <div>
        <div v-if="icon === 'expand'" class="inline-block border-r-2 border-b-2 border-black w-2 h-2 transform rotate-45 -translate-y-1"></div>
        <div v-if="icon === 'collapse'" class="inline-block border-l-2 border-t-2 border-black w-2 h-2 transform rotate-45 -translate-y-1"></div>
    </div>
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>
