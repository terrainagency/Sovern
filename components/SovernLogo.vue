<template>
    <div :class="size">
       <svg v-if="!darkMode" class="w-full h-full" viewBox="0 0 62.088 72.865">
            <defs>
                <linearGradient id="linear-gradient" x1="0.767" y1="0.529" x2="0.252" y2="0.449" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-opacity="0.584"/>
                <stop offset="1" stop-opacity="0"/>
                </linearGradient>
                <radialGradient id="radial-gradient" cx="0.199" cy="-0.02" r="1.162" gradientTransform="translate(0 -0.001) scale(1 0.971)" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#646464"/>
                <stop offset="0.512"/>
                <stop offset="1"/>
                </radialGradient>
            </defs>
            <g id="Group_141" data-name="Group 141" transform="translate(0.018 0.979)">
                <path id="Path_37" data-name="Path 37" d="M.674,2.186,59.306,0l-.674,20.6L0,22.79Z" transform="translate(48.479 62.447) rotate(-144.5)" opacity="0.5" fill="url(#linear-gradient)"/>
                <path id="Union_2" data-name="Union 2" d="M18.922,47.86l42.957-4.84A21.21,21.21,0,0,1,43.253,67.046L.3,71.886A21.21,21.21,0,0,1,18.922,47.86Zm-.122-44L61.756-.979A21.21,21.21,0,0,1,43.13,23.044L.173,27.884A21.209,21.209,0,0,1,18.8,3.861Z" transform="translate(0 0)" fill="url(#radial-gradient)"/>
            </g>
        </svg>
        <svg v-else class="w-full h-full" viewBox="0 0 65.862 69.163">
            <defs>
                <linearGradient id="linear-gradient" x1="0.767" y1="0.529" x2="0.252" y2="0.449" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#777" stop-opacity="0"/>
                <stop offset="1" stop-color="#c3c3c3"/>
                </linearGradient>
                <radialGradient id="radial-gradient" cx="0.199" cy="-0.02" r="1.162" gradientTransform="translate(0 -0.001) scale(1 0.971)" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="0.512" stop-color="#d6d6d6"/>
                <stop offset="1" stop-color="#5f5f5f"/>
                </radialGradient>
            </defs>
            <g id="Group_141" data-name="Group 141" transform="translate(-191.338 -240.559)">
                <path id="Path_37" data-name="Path 37" d="M0,0,63.4-2.186l-.729,20.6L-.729,20.6Z" transform="matrix(-0.819, -0.574, 0.574, -0.819, 244.528, 299.659)" opacity="0.5" fill="url(#linear-gradient)"/>
                <path id="Union_2" data-name="Union 2" d="M19,46.875,61.955,42c1.457,10.963-6.978,20.942-18.839,22.289L.164,69.163C-1.292,58.2,7.141,48.221,19,46.875Zm0-42L61.955,0c1.457,10.963-6.978,20.942-18.839,22.288L.164,27.163C-1.292,16.2,7.141,6.221,19,4.874Z" transform="translate(195.081 240.559)" fill="url(#radial-gradient)"/>
            </g>
        </svg>
    </div>
</template>
<script>
export default {
    props: {
        darkMode: {
            type: Boolean,
            required: false
        },
        size: {
            type: String,
            required: false
        }
    }
}
</script>
