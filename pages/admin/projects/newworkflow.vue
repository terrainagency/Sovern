<template>
    <div class="w-full">
        <h2>New Workflow</h2>
        <form action="" class="relative max-w-lg mx-auto flex flex-col items-center z-0">
            <div class="w-[2px] h-full absolute left-1/2 transform -translate-x-1/2 bg-white-200 -z-10"></div>

            <div class="relative rounded-xl bg-white-100 inline-block px-5 py-3">
               <div class="text-center text-gray">Project created</div>
            </div>

                        <button class="btn btn-sm btn-primary my-5">+</button>

            <div class="w-full relative rounded-xl px-3 py-5 bg-white border-gradient">
               <div class="font-bold text-center mb-4">Initial email</div>
               <div class="text-gray rounded-lg p-3 mb-2">Booking with Tony Redmer confirmed!</div>
               <div class="rounded-lg p-3 mb-4 text-gray">
                    <p><span class="py-1 px-2 bg-[#92D4F7] bg-opacity-30 text-[#4E7FEF] rounded-md ">$client_first_name</span>,</p>
                    <p>Your photoshoot at <span class="py-1 px-2 bg-[#92D4F7] bg-opacity-30 text-[#4E7FEF] rounded-md">$project_datetime</span> is confirmed!</p><p>You'll receive a call sheet with more information 48 hours before our photoshoot.</p>
               </div>
                <div class="px-6 text-center">
                    <div class="py-3 px-4 rounded-lg border border-white-200 inline-block">Immediately</div>
                    <div class="py-3 px-4 text-gray inline-block">after</div>
                    <div class="py-3 px-4 rounded-lg border border-white-200 inline-block">Project created</div>
                </div>
            </div>

                        <button class="btn btn-sm btn-primary my-5">+</button>


            <div class="w-full relative bg-white rounded-xl px-4 py-5 border-gradient">

               <div class="font-bold text-center mb-4">Call sheet email</div>

               <div class="rounded-lg py-4 px-3 text-left mb-4">
                    <p><span class="py-1 px-2 bg-[#92D4F7] bg-opacity-30 text-[#4E7FEF] rounded-md ">$client_first_name</span>,</p>
                    <p>Your call sheet is ready! You can view it here <span class="py-1 px-2 bg-[#92D4F7] bg-opacity-30 text-[#4E7FEF] rounded-md ">$project_link</span></p><p>Please let me know if you have any questions</p>
               </div>


                <div class="px-6 text-center">
                    <div class="py-3 px-4 rounded-lg border border-white-200 inline-block">48 hrs</div>
                    <div class="py-3 px-4 text-gray inline-block">before</div>
                    <div class="py-3 px-4 rounded-lg border border-white-200 inline-block">Event start</div>

                </div>
            </div>
                        <button class="btn btn-sm btn-primary my-5">+</button>

            <div class="relative bg-white rounded-xl px-8 py-5 border-gradient">
               <div class="font-bold text-center mb-4">Photoshoot</div>
                <div class="flex justify-between">
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">24 hrs</div>
                    <div class="py-3 px-4 text-gray">before</div>
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">Event end</div>
                </div>
            </div>

                                    <button class="btn btn-sm btn-primary my-5">+</button>


            <div class="relative bg-white rounded-xl px-8 py-5 border-gradient mb-10">
               <div class="font-bold text-center mb-4">Exported</div>
                <div class="flex justify-between">
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">24 hrs</div>
                    <div class="py-3 px-4 text-gray">after</div>
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">Event end</div>
                    <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-2 rounded-b-full bg-white-200 -z-10"></div>
                </div>
            </div>

            <div class="relative bg-white rounded-xl px-8 py-5 border-gradient mb-10">
               <div class="font-bold text-center mb-4">Proofs</div>
                <div class="flex justify-between">
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">24 hrs</div>
                    <div class="py-3 px-4 text-gray">after</div>
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">Event end</div>
                </div>
            </div>

            <div class="relative bg-white rounded-xl px-8 py-5 border-gradient mb-10">
               <div class="font-bold text-center mb-4">Selects</div>
                <div class="flex justify-between">
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">24 hrs</div>
                    <div class="py-3 px-4 text-gray">after</div>
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">Event end</div>
                </div>
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-2 rounded-b-full bg-white-200 -z-10"></div>
            </div>

            <div class="relative bg-white rounded-xl px-8 py-5 border shadow-md border-white-100 mb-10">
               <div class="font-bold text-center mb-4">Edits</div>
                <div class="flex justify-between">
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">1 week</div>
                    <div class="py-3 px-4 text-gray">after</div>
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">Selects</div>
                </div>
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-2 rounded-b-full bg-white-200 -z-10"></div>
            </div>

            <div class="relative bg-white rounded-xl px-8 py-5 border shadow-md border-white-100 mb-10">
               <div class="font-bold text-center mb-4">Final Confirmation</div>
                <div class="flex justify-between">
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">-</div>
                    <div class="py-3 px-4 text-gray">-</div>
                    <div class="py-3 px-4 rounded-lg border border-white-200 w-full">-</div>
                </div>
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-2 rounded-b-full bg-white-200 -z-10"></div>
            </div>

            <!-- <div class="mb-4">
                <label class="inline-block mb-1">Title</label>
                <input type="text" class="input input-md" placeholder="Title">
            </div>

            <div class="mb-4">
                <label class="inline-block mb-1">Due</label>
                <input type="text" class="input input-md" placeholder="Title">
            </div> -->

            <button class="relative btn btn-lg btn-primary mx-auto">+</button>
        </form>
    </div>
</template>