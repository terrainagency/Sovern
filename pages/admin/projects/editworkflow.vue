<template>
    <div class="w-full">
        <form action="" class="relative max-w-screen-lg mx-auto flex flex-col items-center  z-0">


            <!-- <div class="w-[2px] h-full absolute left-1/2 transform -translate-x-1/2 bg-black/5 -z-10"></div> -->

            <div class="relative rounded-lg border inline-block px-5 py-3 mb-10">
               <div class="text-center">Project created</div>

               
            </div>




            <CardAutomation v-bind:automation="{ type: 'email', title: 'Booking confirmation email', timing: { event: 'Project created', when: 'when', spacing: 'Immediately'}}" class="mb-2" />
            <CardAutomation v-bind:automation="{ type: 'email', title: 'Call sheet email', timing: { event: 'Event starts', when: 'before', spacing: '48 Hours'}}" />


            <CardAutomation v-bind:automation="{ type: 'task', title: 'Photoshoot', timing: { event: 'Photoshoot ends', when: 'when', spacing: 'Immediately'}}" />
            <CardAutomation v-bind:automation="{ type: 'task', title: 'Exported', timing: { event: 'Event ends', when: 'after', spacing: '24 Hours'}}" />
            <CardAutomation v-bind:automation="{ type: 'task', title: 'Proofs', timing: { event: 'Event ends', when: 'after', spacing: '24 Hours'}}" />
            <CardAutomation v-bind:automation="{ type: 'task', title: 'Selections', timing: { event: '-', when: '-', spacing: '-'}}" />
            <CardAutomation v-bind:automation="{ type: 'task', title: 'Edits', timing: { event: 'Selections', when: 'after', spacing: '2 weeks'}}" />
            <CardAutomation v-bind:automation="{ type: 'task', title: 'Final confirmation', timing: { event: '-', when: '-', spacing: '-'}}" />



            <!-- <CardAutomation v-bind:automation="'task'" />
            
            <CardAutomation  v-bind:automation="'notification'"/> -->
 

                    <button class="my-5 btn btn-sm bg-black rounded-lg w-36 h-14">
                            <div class="w-[2px] rounded-full h-3 bg-white absolute"></div>
                            <div class="h-[2px] rounded-full w-3 bg-white absolute"></div>
                        </button>

            <!-- <button class="relative btn btn-lg btn-primary mx-auto">+</button> -->
        </form>
    </div>
</template>