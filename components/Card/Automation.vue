<template>
    <div @click.prevent="edit" ref="module" class="border-gradient cursor-pointer w-full relative rounded-lg hover:shadow-lg px-3 bg-white transition duration-150 mb-2">
        <div class="flex justify-between items-center py-3">

            <div class="flex items-center min-w-64">
                <div v-if="automation.type === 'email'" class="relative z-10 h-14 w-14 flex items-center bg-conic rounded-xl justify-center mr-4 flex-shrink-0">
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


                <div v-if="automation.type === 'task'" class="relative z-10 h-14 w-14 flex items-center bg-white-100 rounded-xl justify-center mr-4 flex-shrink-0">

                     <svg v-if="automation.type === 'task'" class="w-10 h-10" viewBox="0 0 66.5 66.5">
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
                <input type="text" class="input-toggle text-black input-sm font-bold" v-model="automation.title" v-bind:disabled="!expanded" />
            </div>
            
            <div class="text-right flex-grow text-gray">
                <div class="py-3 px-4 w-36 text-center rounded-lg bg-white-100 inline-block">{{ automation.timing.spacing }}</div>
                <div class="py-3 px-4 w-24 text-center inline-block">{{ automation.timing.when }}</div>
                <div class="py-3 px-4 w-36 text-center rounded-lg bg-white-100 inline-block">{{ automation.timing.event }}</div>
            </div>

            <div @click.stop="" v-if="expanded" class="ml-2 flex-shrink-0">
                <button @click.prevent="save" class="btn py-3 px-8 btn-black rounded-lg w-32">Save</button>
            </div>
        </div>

        <div v-if="automation.type === 'email'" class="py-3">
            <input ref="subject" type="text" class="input-toggle-full input-sm mb-2" value="Your booking with Tony Redmer is confirmed!" v-bind:disabled="!expanded" />
            
            <InputTextarea ref="message" class="input-toggle-full" v-bind:disabled="!expanded" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        automation: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            expanded: false,
        }
    },
    mounted() {
        // this.$refs.message.disabled = true;
    },
    methods: {
        edit() {
            this.expanded = true
            this.$refs.module.classList.remove("mb-2", "cursor-pointer")
            this.$refs.module.classList.add("shadow-lg", "mt-3", "mb-6")
        },
        save() {
            this.expanded = false

            this.$refs.module.classList.remove("shadow-lg", "mt-3", "mb-6")
            this.$refs.module.classList.add("mb-2", "cursor-pointer")
        }
    }
}
</script>
