<template>
    <div class="relative">
        <div @click="open" class="relative bg-gray/20 rounded-xl w-full h-64 card overflow-hidden flex flex-wrap" role="button">
            <div v-if="!selected.title" class="bg-white-300 absolute left-1/2 top-0 right-0 bottom-0"></div>
            <div v-for="image in selected.images" :key="image.id" class="w-1/3 h-1/2">
                <img :src="image.url" class="w-full h-full object-cover">
            </div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-5 bg-white transition duration-150 rounded-full shadow-lg tracking-wider text-sm whitespace-nowrap">
                <span v-if="!selected.title" class="text-gray">Add moodboard</span>
                <span v-else>{{ selected.title }}</span>
            </div>
        </div>

        <button v-if="selected.title" @click="selected = {}; output = null" class="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black shadow-sm transition duration-150 rounded-full z-50 text-white flex items-center justify-center">x</button>

        <div v-if="show" class="absolute overflow-x-hidden p-2 rounded-xl card mt-2 z-10 w-full">
            <input @keyup="filter" type="text" class="input input-sm" v-model="search">
            <ul class="flex flex-wrap py-1">
                <li v-for="moodboard in moodboards" :key="moodboard.id" class="w-full py-1">
                    <input type="radio" name="moodboard" :id="moodboard.id" :value="moodboard.id" v-model="output">
                    <label @click="updateMoodboard(moodboard)" :for="moodboard.id" class="moodboard block relative pb-3/4 select-none" role="button">
                        <div class="absolute top-0 right-0 bottom-0 left-0 flex flex-wrap overflow-hidden rounded-xl bg-white-100  border border-black/5 shadow-lg">
                            <div v-for="image in moodboard.images" :key="image.id" class="w-1/3 h-1/2">
                                <img :src="image.url" class="w-full h-full object-cover">
                            </div>
                            
                        </div>
                        <div class="title absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full py-2 px-4 whitespace-nowrap text-sm shadow-md text-gray">{{ moodboard.title }}</div>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'

export default {
    props: {
        input: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            show: false,
            options: [],
            moodboards: [],
            selected: {},
            output: null,
            search: ''
        }
    },
    mounted() {
        if(this.input) {
            this.getInput()
        }
        this.getMoodboards()
    },
    methods: {
        async getInput() {
           this.selected = (await unWrap(await fetch(`/api/moodboards/${this.input}`)))
        },
        async getMoodboards() {
            this.options = (await unWrap(await fetch(`/api/moodboards/list`))).json
            this.moodboards = this.options
        },
        updateMoodboard(moodboard) {
            this.show = false
            this.selected = moodboard
            this.$emit('output', this.selected.id)
        },
        open() {
            if(!this.show) window.addEventListener('click', this.close)
            this.show = true
        },
        close(e) {
            if (!this.$el.contains(e.target)) {
                this.show = false;
                window.removeEventListener('click', this.close)
                // Clear search
                this.search = ''
                this.filter()
            }
        },
        filter() {
            // const value = e.target.value
            let regex = new RegExp(this.search, 'gi')

            this.moodboards = this.options.filter(obj => obj.title.match(regex))
        },
    }
}
</script>
