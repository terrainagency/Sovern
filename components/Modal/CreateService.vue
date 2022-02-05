<template>
    <div class="h-full">
        <button @click="showForm = true" class="w-full border border-white-200 rounded-md h-full text-gray hover:text-black">Create new service</button>
        <!-- NOTE: Update the background to a blur via canvas -->
        
        <div v-if="showForm" @click.prevent="showForm = false" class="fixed top-0 left-0 flex items-center justify-center overflow-scroll w-screen h-screen bg-black/10">
            <form v-on:submit.prevent="createProject" @click.stop="" class="relative w-full max-w-screen-md pt-6 px-4 pb-6 rounded-xl shadow-xl bg-white border border-white-100">
                <button @click="showForm = false" class="h-12 w-12 bg-white hover:text-gray border border-gray/10 transition duration-150 shadow-md rounded-full flex items-center justify-center absolute top-3 -left-6">
                    <div class="h-2 w-2 border-l-2 border-b-2 border-current transform rotate-45"></div>
                </button>

                <header class="mb-8 font-bold text-center">New service</header>

                <div class="flex -mx-2">
                    <fieldset class="w-1/2 mx-2">
                        <InputMoodboard class="mb-4" />
                        <InputLocation class="mb-8" />

                        

                    </fieldset>

                    <fieldset class="w-1/2 px-1 mx-2">
                        
                        
                        <!-- <template v-if="date">

                            <div class="mb-2">{{ date }}</div>
                            <InputHour class="mr-2" />
                            <span class="text-gray">-</span>
                            <InputHour class="ml-2" />
                        </template> -->
                        <div class="mb-2">
                            <div class="text-sm mb-1">Date</div>
                            <InputDatePicker @update-date="updateDate" class="mb-4" />
                        </div>  
                        <div class="mb-2">
                            <div class="text-sm mb-1">Workflow</div>
                            <InputWorkflow />
                        </div>
                        <div class="mb-2">
                            <div class="text-sm mb-1">Client(s)</div>
                            <InputClient /> 
                        </div>
                        
                        <div class="mb-2">
                            <div class="text-sm mb-1">Title</div>
                            <input class="input input-md mb-2" type="text" placeholder="Title">
                        </div>
                        
                        <div class="mb-2">
                            <div class="text-sm mb-1">Price</div>
                            <InputPrice />
                        </div>
                    </fieldset>
                </div>

                <button type="submit" class="btn btn-lg btn-primary mx-auto mt-8">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        collectionID: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            showForm: false,
            service: {}
        }
    },
    methods: {
        async createService() {

        }
    }
    
}
</script>