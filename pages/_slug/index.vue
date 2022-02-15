<template>
    <div>
        <header class="flex flex-col items-center">
            <div class="rounded-full w-24 h-24 overflow-hidden mb-4">
                <img :src="user.image" class="w-full h-full object-cover" />
            </div>
            <h1 class="text-center text-4xl mb-1">{{ user.name }}</h1>
            <span class="">@{{ user.slug }}</span>
        </header>
    </div>
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'

export default {
    layout: 'profile',
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        this.getUserPage(this.$route.params.slug)
    },
    methods: {
        async getUserPage(slug) {
            this.user = (await unWrap(await fetch(`/api/creators/?slug=${slug}`))).json
        }
    }
}
</script>
