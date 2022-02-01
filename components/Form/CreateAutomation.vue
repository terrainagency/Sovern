<template>

    <form class="w-full mt-8 max-w-lg border-gradient border-gradient-rounded-lg relative rounded-lg shadow-lg bg-white mb-8 mx-auto p-10">
        <section class="flex flex-wrap w-full justify-center mb-8">
            <h3 class="w-full mb-4 font-bold text-center">Type</h3>

            <input type="radio" v-model="automation.type" name="type" value="email" id="type_email">
            <label for="type_email" role="button" class="w-36 h-36 checkbox relative bg-white mb-2 mr-3">
                <div class="relative z-10 h-14 w-14 flex items-center bg-conic rounded-xl justify-center flex-shrink-0">
                    <svg class="w-7 h-7" viewBox="0 0 36.5 28.389">
                        <defs>
                            <linearGradient id="email-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                            <stop offset="0" stop-color="#fff" stop-opacity="0.89"/>
                            <stop offset="1" stop-color="#fff" stop-opacity="0.518"/>
                            </linearGradient>
                        </defs>
                        <path id="Path_66" data-name="Path 66" d="M3,7V27.278a4.054,4.054,0,0,0,4.056,4.056H35.444A4.054,4.054,0,0,0,39.5,27.278V7" transform="translate(-3 -2.944)" fill="url(#email-gradient)"/>
                        <path id="Path_65" data-name="Path 65" d="M3,8.614H3A3.612,3.612,0,0,0,4.586,11.6l12.128,8.219a8.113,8.113,0,0,0,9.1,0l12.1-8.2A3.6,3.6,0,0,0,39.5,8.634v-.02A3.614,3.614,0,0,0,35.887,5H6.614A3.614,3.614,0,0,0,3,8.613Z" transform="translate(-3 -5)" fill="#fff"/>
                    </svg>
                </div>
                <span class="tracking-wide text-gray absolute bottom-3 left-1/2 transform -translate-x-1/2">Email</span>
            </label>

            <input type="radio" v-model="automation.type" name="type" value="task" id="type_task">
            <label for="type_task" role="button" class="w-36 h-36 checkbox relative pt-8  pb-12 px-10 bg-white mb-2 ml-3">
                <div class="relative z-10 h-14 w-14 flex items-center bg-white-100 rounded-xl justify-center flex-shrink-0">
                    <svg class="w-10 h-10" viewBox="0 0 66.5 66.5">
                            <defs>
                                <filter id="Rectangle_138" x="0" y="0" width="66.5" height="66.5" filterUnits="userSpaceOnUse">
                                <feOffset dy="5" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="5" result="blur"/>
                                <feFlood flood-opacity="0.302"/>
                                <feComposite operator="in" in2="blur"/>
                                <feComposite in="SourceGraphic"/>
                                </filter>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_138)">
                                <rect id="Rectangle_138-2" data-name="Rectangle 138" width="36.5" height="36.5" rx="18.25" transform="translate(15 10)" fill="rgba(255,255,255,0.6)"/>
                            </g>
                            <path id="Path_73" data-name="Path 73" d="M2017.677,3372.446l4.7,4.7,10.251-10.251" transform="translate(-1991.903 -3343.771)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3"/>
                        </svg>
                </div>
                <span class="tracking-wide text-gray absolute bottom-3 left-1/2 transform -translate-x-1/2">Task</span>
            </label>
        </section>

        <section v-if="automation.type === 'email'" class="mb-8">
            <h3 class="mb-2 font-bold">Subject</h3>
            <input v-model="automation.fields.subject" type="text" class="input-toggle-full input-sm mb-2" />
            
            <h3 class="mb-2 font-bold">Message</h3>
            <InputTextarea @update-value="updateMessage" class="input-toggle-full" />
        </section>

        <section v-if="automation.type" class="mb-8">
            <div class="flex justify-between items-center py-3">
        
                <div class="text-right flex-grow text-gray input input-md">
                    <InputAutomationAction @update-value="updateAction" />
                </div>
            </div>
        </section>

        <button @click.prevent="createAutomation" class="btn py-3 px-8 btn-black rounded-lg w-32 mx-auto">Create</button>
    </form>

</template>
<script>
export default {
    data() {
        return {
            automation: {
                type: null,
                title: null,
                fields: {
                    subject: null,
                    message: null
                },
                timing: null,
                when: null,
                reference: null
            }
        }
    },
    methods: {
        updateMessage(e) {
            console.log(e)
            this.automation.fields.message = e
        },
        async createAutomation() {
            await fetch('/api/workflows/automations', {
                method: 'POST',
                body: JSON.stringify(this.automation),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        updateAction(e) {
            console.log(e)
            this.automation.timing = e.timing
            this.automation.when = e.when
            this.automation.reference = e.reference
        }
    }
}
</script>