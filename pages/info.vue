<template>
    <div>
        <Header :contact="true" />

        <main class="lg:px-1/12 xl:px-2/12">
            <div class="flex flex-col lg:flex-row lg:-mx-1 mb-20 lg:mb-40 overflow-hidden">
                <div class="w-full lg:w-1/2 lg:mx-1">
                    <div class="relative pb-5/4 w-full">
                        <!-- <img class="absolute w-full h-full object-cover" src="~/assets/images/info.jpg"> -->
                    </div>  
                </div>
                <div class="w-full mt-4 lg:mt-0 lg:w-1/2 lg:h-full lg:mx-1">
                    <div class="p-1/12">
                        <h1 class="uppercase text-xs tracking-wider mb-2">Info</h1>
                        <div class="mb-14 font-title text-2xl md:text-3xl leading-9">
                            <p>{{ info.info }}</p>
                        </div>

                        <h2 class="uppercase text-xs tracking-wider mb-2">Contact</h2>
                        <div class="mb-14 font-title text-2xl md:text-3xl">
                            <p class="mb-2">
                                <a :href="info.instagram" target="_blank" class="no-underline font-normal">Instagram</a>
                            </p>
                            <p class="mb-2">
                                <a :href="`mailto:${info.email}`" class="no-underline font-normal"><i class="hidden sm:inline">Email: </i>{{ info.email }}</a>
                            </p>
                            <p class="mb-2">
                                <a :href="`sms:${info.text}`" class="no-underline font-normal"><i class="hidden sm:inline">Text: </i>+{{ info.text }}</a>
                            </p>
                        </div>


                        <div class="mb-14">
                            <h2 class="uppercase text-xs tracking-wider mb-2">Primary markets</h2>
                            <p class="font-title text-2xl md:text-3xl">{{ info.markets }}</p>
                        </div>

                        <div class="mb-14">
                            <h2 class="uppercase text-xs tracking-wider mb-2">Select clients & publications</h2>
                            <p class="font-title text-2xl md:text-3xl">{{ info.clients }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script> 
import info from '~/data/info'

export default {
    data(){
        return {
            info
        }
    }
}
</script>