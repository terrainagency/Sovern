<template>
<div class="relative max-w-[600px] mx-auto p-4 pt-10 md:p-8 lg:p-16 bg-white rounded-3xl shadow-xl mb-20">
    <a href="./" class="absolute -left-8 top-8 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer border-2 border-gray-800 hover:border-black transition duration-300">
        <div class="border-l-2 border-b-2 border-black transform translate-x-[1px] rotate-45 w-2 h-2"></div>
    </a>

    <div class="mb-10">
        <h1 class="font-bold mb-3 text-xl text-center">Join the waitlist</h1>
        <p>We'll notify you when new bookings open up. On average, new bookings in {{ title }} become available every {{ frequency }}.</p>    
    </div>
    <form name="waitlist">
        <h2 class="text-xs font-bold uppercase tracking-wider mb-3">1. Name</h2>

        <input type="text" name="location" :value="title" class="hidden" />

        <div class="relative mb-4">
            <input type="text" name="firstName" />
            <label for="firstName" class="label">First</label>
        </div>

        <div class="relative mb-4">
            <input type="text" name="lastName" />
            <label for="lastName" class="label">Last</label>
        </div>


        <h2 class="text-xs font-bold uppercase tracking-wider mb-3 mt-14">2. Contact info</h2>


        <div class="relative mb-4">
            <input type="email" name="email" />
            <label for="email" class="label">Email</label>
        </div>

        <div class="relative mb-4">
            <input type="text" name="phone" />
            <label for="phone" class="label">Phone Number</label>
        </div>

        <div class="relative mb-4">
            <input type="text" name="instagram" />
            <label for="instagram" class="label">Instagram</label>
        </div>

        <h2 class="text-xs font-bold uppercase tracking-wider mb-3 mt-14">3. Preferred contact method</h2>

        <div class="flex flex-col md:flex-row md:-mx-2">

            <input type="radio" id="preferences-text" value="text" name="marketingPreferences" />
            <label for="preferences-text" class="checkbox p-4 md:p-6 lg:p-8 mb-3 md:mx-2">
                Text Message
            </label>

            <input type="radio" id="preferences-instagram" value="instagram" name="marketingPreferences" />
            <label for="preferences-instagram" class="checkbox p-4 md:p-6 lg:p-8 mb-3 md:mx-2">
                Instagram DM
            </label>

            <input type="radio" id="preferences-email" value="email" name="marketingPreferences" />
            <label for="preferences-email" class="checkbox p-4 md:p-6 lg:p-8 mb-3 md:mx-2">
                Email
            </label>
        </div>

        <div class="px-2/12"> 
            <input type="submit" value="Join the waitlist" class="btn btn-lg btn-primary w-full mt-14" />
        </div>
    </form>
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        frequency: {
            type: String,
            required: true
        }
    }
}
</script>