<template>
    <div>
        <button @click="showModal = true" class="relative border border-white-200 rounded-xl w-full max-w-xs mx-2 hover:border-gray/40 transition duration-150">
            <div class="pb-full"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-gray">New project</div>
        </button>

        <div v-if="showModal" @click.prevent="showModal = false" class="fixed top-0 left-0 flex items-center justify-center overflow-scroll w-screen h-screen bg-black/10">

            <form v-on:submit.prevent="createWorkflow" @click.stop="" class="relative w-full max-w-screen-sm pt-6 px-4 pb-6 rounded-xl shadow-xl bg-white border-gradient border-gradient-rounded-xl">
                <header class="mb-8 font-bold text-center">New workflow</header>

                <ModalCreateAutomation />
            </form>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            workflow: {},
            showModal: false
        }
    },
    methods: {
        async createWorkflow() {
            await fetch('/api/workflows', {
                method: 'POST',
                body: JSON.stringify(this.workflow),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
    }
}
</script>