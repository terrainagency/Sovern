<template>
    <div @click.prevent="$emit('showModal', false)" class="absolute top-0 right-0 bottom-0 left-0 bg-black/10 backdrop-blur-sm flex items-center justify-center">


        <div v-if="project" @click.stop="" class="w-full max-w-screen-md p-6 bg-white rounded-3xl shadow-xl">


            <header class="mb-8 font-bold text-center">{{ project.title }}</header>

            <div class="flex -mx-2">
                <fieldset class="w-1/2 mx-2">
                    <InputMoodboard :input="project.moodboard" class="mb-4" />
                    <!-- <InputLocation :input="{ address: project.address }" class="mb-4" /> -->

                    <button class="text-sm text-gray px-2 hover:text-black">+ Directions</button>
                    <div>
                        <div class="text-sm mb-1">Directions</div>
                        <InputUtilsTextarea class="input input-md" :placeholder="'Directions'" />
                    </div>
                    

                </fieldset>

                <fieldset class="w-1/2 px-1 mx-2">
                    <InputUtilsDatePicker class="mb-6" :input="project.startTime" @output="updateDate" :past="true" />

                    <div class="mb-2">
                        <div class="text-sm mb-1">Client(s)</div>
                        <InputClient :input="project.clients" /> 
                    </div>

                
                    <div class="mb-2">
                        <div class="text-sm mb-1">Workflow</div>
                        <InputWorkflow />
                    </div>
                    
                    <div class="mb-2">
                        <div class="text-sm mb-1">Price</div>
                        <InputPrice />
                    </div>
                </fieldset>
            </div>
            <!-- <span class="absolute bottom-0 right-0 bg-black/90 text-white rounded-md p-3">{{ project }}</span> -->
        </div>
    </div>
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'

export default {
    props: {
        projectId: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            project: undefined
        }
    },
    mounted() {
        this.getProject(this.projectId)
        // if(this.project.geoLocation) {
        //     this.$maps.showMap(this.$refs.map, this.project.geoLocation.latitude, this.project.geoLocation.longitude)
        // }
    },
    methods: {
        async getProject(id) {
            this.project = (await unWrap(await fetch(`/api/projects/?id=${id}`))).json
        }
    }
    // Get proejct by ID
}
</script>
