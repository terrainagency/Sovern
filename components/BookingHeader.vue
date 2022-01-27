<template>
    <header class="pt-20 pb-5 flex flex-col items-center">
            <a href="/packages" class="block rounded-full overflow-hidden h-24 w-24 mb-3 bg-gray shadow-md">
                <img class="w-full h-full" src="https://tonyredmer.com/images/info.jpg">
            </a>

            <div class="text-center">
                <h1 v-if="darkMode" class="text-lg font-bold text-white">Tony Redmer</h1>
                <h1 v-else class="text-lg font-bold">Tony Redmer</h1>

                <p  class="text-gray font-light">@tonyredmer</p>
            </div>
    </header>
</template>

<script>
export default {
    props: {
        darkMode: {
            type: Boolean,
            required: true
        }
    }
}
</script>
