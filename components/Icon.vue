<template>
    <div>
        <div v-if="icon === 'expand'" class="inline-block border-r-2 border-b-2 border-black w-2 h-2 transform rotate-45 -translate-y-1"></div>

        <div v-if="icon === 'collapse'" class="inline-block border-l-2 border-t-2 border-black w-2 h-2 transform rotate-45 -translate-y-[2px]"></div>

        <svg v-if="icon === 'dashboard'" class="w-full h-full stroke-current" viewBox="0 0 24 24">
            <path id="Path_39" data-name="Path 39" d="M19.071,9.172c3.905,1.562,3.905,4.095,0,5.657a21.924,21.924,0,0,1-14.142,0c-3.905-1.562-3.905-4.095,0-5.657a21.924,21.924,0,0,1,14.142,0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
            <path id="Path_40" data-name="Path 40" d="M14.828,4.929a21.924,21.924,0,0,1,0,14.142c-1.562,3.905-4.095,3.905-5.657,0a21.924,21.924,0,0,1,0-14.142c1.562-3.905,4.095-3.905,5.657,0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
            <path id="Path_41" data-name="Path 41" d="M19.071,4.929a10,10,0,1,1-14.142,0,10,10,0,0,1,14.142,0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
        </svg>

        <svg v-if="icon === 'moodboards'" class="w-8 h-8 stroke-current" viewBox="0 0 24 24">
            <g id="Group_172" data-name="Group 172">
                <path id="Path_48" data-name="Path 48" d="M19,21H16a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2v5A2,2,0,0,1,19,21Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                <path id="Path_49" data-name="Path 49" d="M19,9H16a2,2,0,0,1-2-2V5a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2V7A2,2,0,0,1,19,9Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                <path id="Path_50" data-name="Path 50" d="M5,3H8a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                <path id="Path_51" data-name="Path 51" d="M5,15H8a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V17A2,2,0,0,1,5,15Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
            </g>
        </svg>

        <svg v-if="icon === 'projects'" class="w-full h-full stroke-current" viewBox="0 0 24 24">
            <g id="Group_173" data-name="Group 173">
              <path id="Path_53" data-name="Path 53" d="M20.221,4.292h0a2.1,2.1,0,0,0-2.871-.1L9.313,11.228a2,2,0,0,0-.1,2.919L10.365,15.3a2,2,0,0,0,2.919-.1l7.032-8.037A2.1,2.1,0,0,0,20.221,4.292Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
              <path id="Path_54" data-name="Path 54" d="M10.87,9.87l3.78,3.78" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
              <path id="Path_55" data-name="Path 55" d="M3.6,20.323H7.3A3.351,3.351,0,0,0,9.671,14.6h0a3.016,3.016,0,0,0-4.958,1.074L3.191,19.735a.436.436,0,0,0,.408.588Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
            </g>
        </svg>

        <svg v-if="icon === 'reports'" class="w-8 h-8 stroke-current" viewBox="0 0 24 24">
            <path id="Path_46" data-name="Path 46" d="M6,12H7.85l2.168,5L13.982,7l2.168,5H18" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
            <path id="Path_47" data-name="Path 47" d="M17.5,21.5H6.5a4,4,0,0,1-4-4V6.5a4,4,0,0,1,4-4h11a4,4,0,0,1,4,4v11A4,4,0,0,1,17.5,21.5Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
        </svg>

        <svg v-if="icon === 'settings'" class="w-full h-full stroke-current" viewBox="0 0 24 24">
            <path id="Path_15" data-name="Path 15" d="M13.909,10.091a2.7,2.7,0,1,1-3.818,0,2.7,2.7,0,0,1,3.818,0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
            <path id="Path_16" data-name="Path 16" d="M5.25,12a7.137,7.137,0,0,0,.063.882L3.725,14.124A.9.9,0,0,0,3.5,15.28l1.412,2.443a.9.9,0,0,0,1.112.384l1.422-.571a.912.912,0,0,1,.846.1,6.863,6.863,0,0,0,.684.4.916.916,0,0,1,.509.682L9.7,20.23a.9.9,0,0,0,.888.77h2.817a.9.9,0,0,0,.888-.77l.217-1.512a.918.918,0,0,1,.512-.683,6.6,6.6,0,0,0,.681-.4.915.915,0,0,1,.85-.1l1.419.57a.9.9,0,0,0,1.112-.384L20.5,15.28a.9.9,0,0,0-.224-1.156l-1.588-1.242A7.138,7.138,0,0,0,18.75,12a7.138,7.138,0,0,0-.063-.882l1.588-1.242A.9.9,0,0,0,20.5,8.72L19.087,6.277a.9.9,0,0,0-1.112-.384l-1.419.57a.918.918,0,0,1-.85-.1,6.6,6.6,0,0,0-.681-.4.918.918,0,0,1-.512-.683L14.3,3.77A.9.9,0,0,0,13.409,3H10.592a.9.9,0,0,0-.888.77L9.486,5.284a.92.92,0,0,1-.509.682,7.062,7.062,0,0,0-.684.4.917.917,0,0,1-.847.1L6.025,5.893a.9.9,0,0,0-1.112.384L3.5,8.72a.9.9,0,0,0,.224,1.156l1.588,1.242A7.138,7.138,0,0,0,5.25,12Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
        </svg>

        <svg v-if="icon === 'folder'" class="w-full h-full" viewBox="0 0 44.011 31.588">
            <defs>
                <linearGradient id="linear-gradientfolder" x1="0.025" y1="0.051" x2="-0.028" y2="0.35" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-opacity="0.161"/>
                <stop offset="1" stop-opacity="0.114"/>
                </linearGradient>
                <radialGradient id="radial-gradientfolder" cx="0.548" cy="-0.06" r="2.041" gradientTransform="matrix(0.999, -0.037, 0.018, 0.488, 0.001, 0.037)" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#fff" stop-opacity="0.608"/>
                <stop offset="1" stop-color="#fff" stop-opacity="0.29"/>
                </radialGradient>
            </defs>
            <g id="Group_184" data-name="Group 184" transform="translate(-314 -305)">
                <path id="Path_74" data-name="Path 74" d="M0-10H15.991L19.54-4.676H38.332V21.588H0Z" transform="translate(314 315)" fill="url(#linear-gradientfolder)"/>
                <g id="Group_179" data-name="Group 179" transform="translate(316.13 313.873)">
                <path id="Path_75" data-name="Path 75" d="M3.549,10H41.881L38.332,32.715H0Z" transform="translate(0 -10)" fill="rgba(0,0,0,0)"/>
                <path id="Path_77" data-name="Path 77" d="M3.549,10H41.881L38.332,32.715H0Z" transform="translate(0 -10)" fill="url(#radial-gradientfolder)"/>
                </g>
            </g>
        </svg>
        <svg v-if="icon === 'folder-open'" class="w-full h-full" viewBox="0 0 27.192 19.514">
            <defs>
                <linearGradient id="folder-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#00c4ff"/>
                <stop offset="1" stop-color="#00a7ff" stop-opacity="0"/>
                </linearGradient>
            </defs>
            <g id="Group_189" data-name="Group 189" transform="translate(-313.996 -305)">
                <path id="Path_74" data-name="Path 74" d="M0-9.394A.614.614,0,0,1,.588-10H9.282a1.32,1.32,0,0,1,1,.606c0,.025,1.788,2.683,1.788,2.683H23.68V9.514H0Z" transform="translate(314 315)" fill="#006cff"/>
                <path id="Path_77" data-name="Path 77" d="M2.982,10C3,9.991,25.873,10,25.873,10L23.68,24.033H0L2.088,10.668A.9.9,0,0,1,2.982,10Z" transform="translate(315.315 300.482)" fill="url(#folder-gradient)"/>
            </g>
        </svg>

        <svg v-if="icon === 'workflow'" class="w-full h-full fill-current" viewBox="0 0 24 24">
            <path id="Path_78" data-name="Path 78" d="M18.823,11.575l-6.011,8.683a.987.987,0,0,1-1.8-.562V13.973H5.989a.987.987,0,0,1-.811-1.549l6.011-8.683a.987.987,0,0,1,1.8.562v5.723h5.025a.987.987,0,0,1,.811,1.549Z"/>
        </svg>


    </div>
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>
