<template>
    <nav class="w-1/3 max-w-xs h-full">
        <h3 class="font-light tracking-wide mb-4">Workflows</h3>
        <ul class="mb-8">
            <li>
                
                <button class="py-4 px-5 border border-transparent hover:border-black/10 transition duration-100 rounded-xl relative w-full flex justify-start items-center">
                    <!-- <Icon :icon="'collapse'" class="mr-3"/> -->
                    <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'workflow'" class="w-full h-full" /></span>Model Test
                </button>
            </li>
            <li>
                <button class="py-4 px-5 w-full text-left hover:bg-white-100 font-light tracking-wide text-gray rounded-xl">+ New workflow</button>
            </li>
        </ul>
        
        <h3 class="font-light tracking-wide mb-4">Collections</h3>
        <ul class="mb-8">
            <li>
                
                <button class="py-4 px-5 border shadow-md border-black/5 transition duration-100 rounded-xl relative w-full flex justify-start items-center mb-3">
                    <!-- <Icon :icon="'collapse'" class="mr-3"/> -->
                    <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'folder-open'" class="w-full h-full" /></span>Austin
                </button>
                <!-- <ul class="pl-4">
                    <li>
                        
                        <button class="py-3 px-4 ml-4 rounded-lg relative w-full text-left hover:bg-white-100 flex justify-start items-center">
                            Studio
                        </button>
                    </li>
                    <li>
                        <button class="py-3 px-4 ml-4 rounded-lg relative w-full text-left hover:bg-white-100">Location</button>
                    </li>
                </ul> -->
            </li>
            
            <li>
                <button class="py-4 px-5 border border-transparent hover:border-black/10 transition duration-100 rounded-xl relative w-full flex justify-start items-center">
                    <!-- <Icon :icon="'expand'" class="mr-3"/> -->
                    <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'folder'" class="w-full h-full" /></span>Los Angeles
                </button>
            </li>
            <li>
                <button class="py-4 px-5 border border-transparent hover:border-black/10 transition duration-100 rounded-xl relative w-full flex justify-start items-center">
                    <!-- <Icon :icon="'expand'" class="mr-3"/> -->
                    <span class="inline-block w-6 h-6 rounded-md mr-4"><Icon :icon="'folder'" class="w-full h-full" /></span>New York
                </button>
            </li>
            <li>
                <button class="py-4 px-5 w-full text-left hover:bg-white-100 font-light tracking-wide text-gray rounded-xl">+ New collection</button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        current: {
            type: String,
            required: true
        }
    }
    // Get workflows
    // get collections
}
</script>