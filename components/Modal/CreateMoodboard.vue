=

<template>
<div class="w-1/5 mx-2">
    <button @click="showForm = true" class="border border-white-200 rounded-2xl w-full hover:border-gray/40 transition duration-150">
        <div class="pb-3/4"></div>
    </button>
    <!-- NOTE: Update the background to a blur via canvas -->
    
    <div v-if="showForm" @click.prevent="showForm = false" class="fixed top-0 left-0 flex items-center justify-center overflow-scroll w-screen h-screen bg-black/10">

            <form v-on:submit.prevent="createMoodboard" @click.stop="" class="relative w-full max-w-screen-sm p-10 rounded-xl shadow-xl bg-white border border-white-100">

                <header class="mb-8 font-bold text-center">New moodboard</header>

                <!-- <button>From template</button>
                <button>From scratch</button> -->

                <fieldset class="">
                    <div class="mb-2">
                        <div class="text-sm mb-1">Title</div>
                        <input class="input input-md mb-2" type="text" placeholder="Title" v-model="moodboard.title">
                    </div>
                    
                    <div class="flex items-center mb-2">
                        <input type="checkbox" id="private" v-model="moodboard.isPrivate">
                        <label for="private" class="checkbox w-8 h-8 mr-3"></label>
                        <div class="text-sm">Private</div>
                    </div>
                </fieldset>

                <button type="submit" class="btn btn-md btn-black rounded-xl mx-auto mt-8">Create</button>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            showForm: false,
            moodboard: {
                title: null,
                isPrivate: false
            }
        }
    },
    methods: {
        async createMoodboard() {
            await fetch('/api/moodboards', {
                method: 'POST',
                body: JSON.stringify(this.moodboard),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
}
</script>