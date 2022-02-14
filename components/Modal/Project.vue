<template>
    <div @click.prevent="$emit('showModal', false)" class="absolute top-0 right-0 bottom-0 left-0 bg-black/10 flex items-center justify-center">


        <div v-if="project" @click.stop="" class="w-full max-w-screen-md p-6 bg-white rounded-3xl shadow-xl">


            <header class="mb-8 font-bold text-center">{{ project.title }}</header>

            <div class="flex -mx-2">
                <fieldset class="w-1/2 mx-2">
                    <InputMoodboard :input="project.moodboard" @output="updateMoodboard" class="mb-4" />
                    <InputLocation :input="project.address" @output="updateLocation" class="mb-4" />

                    <button @click="showDirections = true" v-if="!showDirections" class="text-sm text-gray px-2 hover:text-black">+ Directions</button>
                    <div v-if="showDirections">
                        <div class="text-sm mb-1">Directions</div>
                        <InputUtilsTextarea class="input input-md" :placeholder="'Directions'" @output="updateDirections" />
                    </div>
                    

                </fieldset>

                <fieldset class="w-1/2 px-1 mx-2">
                    <div class="mb-2">
                        <div class="text-sm mb-1">Client(s)</div>
                        <InputClient :input="project.clients" @output="updateClients" /> 
                    </div>

                    <div class="mb-2">
                        <div class="text-sm mb-1">Title</div>
                        <input @focus="titleEdit = true" @keyup.delete="titleCleared" v-model="project.title" :class="titleEdit ? 'input input-md mb-2' : 'input input-md mb-2 text-gray'" type="text">
                    </div>

                    <div class="mb-2">
                        <InputDateTime @output="updateDateTime" />
                    </div>
                    <div class="mb-2">
                        <div class="text-sm mb-1">Workflow</div>
                        <InputWorkflow @output="updateWorkflow" />
                    </div>
                    
                    <div class="mb-2">
                        <div class="text-sm mb-1">Price</div>
                        <InputPrice @output="updatePrice" />
                    </div>
                </fieldset>
            </div>
            <span class="absolute bottom-0 right-0 bg-black/90 text-white rounded-md p-3">{{ project }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            componentKey: 0
        }
    },
    mounted() {
        if(this.project.geoLocation) {
            this.$maps.showMap(this.$refs.map, this.project.geoLocation.latitude, this.project.geoLocation.longitude)
        }
    },
    methods: {
        forceRerender() {
        this.componentKey += 1;
        }
    }
    // Get proejct by ID
}
</script>
