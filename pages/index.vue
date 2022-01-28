<template>
    <main class="flex bg-[#ffffff]">
        <div class="w-24 border-r border-black/10 h-screen flex justify-center pt-5">
            
        </div>
        <section class="w-1/3 border-r px-2 pt-5 border-black/10">
            <h3 class="pl-3 font-bold text-xl mb-3">Upcoming (1)</h3>
            <ul> 
            <!-- <li v-for="photoshoot in photoshoots" :key="photoshoot.id" class="shadow-sm rounded-xl mb-2 px-6 py-5 border border-black/10 hover:shadow-md transition duration-150 cursor-pointer">
                <div class="w-full flex justify-between items-center mb-3">
                    <div class="flex-grow flex">
                        <div class="mr-3">{{ photoshoot.clientName }}</div>
                        <div class="text-warning text-xs uppercase tracking-widest"><span class="inline-block h-2 w-2 rounded-full bg-warning mr-2"></span></div>
                    </div>
                    <div class="rounded-full bg-success px-3 text-success bg-opacity-10 uppercase text-xs tracking-widest flex items-center">1 day</div>
                </div>
                <p class="text-gray mb-0 text-sm uppercase tracking-widest">12:00 PM - 2:00 PM</p>
                <p class="mb-0">{{ photoshoot.price }}</p>
                
                
            </li> -->
            </ul>
            <div class="mt-10">
                <!-- Past photoshoots and cancelled photoshoots -->
                <h3 class="pl-3 font-bold text-xl mb-3 opacity-30 hover:opacity-100 transition duration-150" role="button">Archived (0)</h3>
            </div>
                        

        </section>
        <section class="flex-grow w-full pt-10">
                <!--    Photoshoot details go here -->
            <div class="mx-auto px-1/12">
                <!-- <Project v-bind:project="photoshoots[0]" /> -->
            </div>
            
        </section>
    </main>
</template>

<script>

</script>
