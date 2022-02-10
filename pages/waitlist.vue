<template>
    <div class="flex flex-col items-center">
        <div class="fixed top-0 right-0 left-0 bottom-0 -z-10">
            <!-- <img src="~/assets/images/banner_dark.jpg"> -->
        </div>
        <BookingHeader v-bind:darkMode="true"></BookingHeader>

        <div class="bg-white shadow-2xl rounded-xl p-12 max-w-lg">
            <h1 class="text-5xl font-bold mb-5 text-center">Waitlist</h1>
            <p>Be the first to know when new photoshoot time slots become available in your city.</p>
            <form class="flex flex-nowrap overflow-scroll scrollbar-none h-0" name="submit-to-google-sheet">

                <fieldset class="w-full mr-36 pt-5 pb-8 flex-shrink-0">
                    <p class="mb-3">1. Contact info</p>

                    <input type="text" name="name" placeholder="Name">
                    <input type="text" name="instagram" placeholder="Instagram">
                    <input type="text" name="city" placeholder="City">
                </fieldset>



                <fieldset class="w-full pt-5 pb-8 flex-shrink-0">
                    <div class="mb-5">
                        <input type="email" name="email" placeholder="Email">
                        <input type="tel" name="phone" placeholder="Phone">
                    </div>
                    

                    <p class="mb-3">3. Preferred contact method</p>
                    
                    <input type="radio" name="contact_method" id="cm_text" value="Text" checked>
                    <label for="cm_text" class="checkbox">Text (Recommended)</label>
                    <input type="radio" name="contact_method" id="cm_email" value="Text">
                    <label for="cm_email" class="checkbox">Email</label>
                    <input type="radio" name="contact_method" id="cm_instagram" value="Text">
                    <label for="cm_instagram" class="checkbox">Instagram DM</label>
                </fieldset>
            </form>
            <nav>
                <ul class="flex justify-center mb-5">
                    <li class="rounded-full mx-2 bg-black h-4 w-4 flex items-center justify-center shadow-md"><div class="rounded-full h-1 w-1 bg-white"></div></li>
                    <li class="rounded-full mx-2 h-4 w-4 flex items-center justify-center"><div class="rounded-full h-1 w-1 bg-black opacity-20"></div></li>
                    <li class="rounded-full mx-2 h-4 w-4 flex items-center justify-center"><div class="rounded-full h-1 w-1 bg-black opacity-20"></div></li>
                    <li class="rounded-full mx-2 h-4 w-4 flex items-center justify-center"><div class="rounded-full h-1 w-1 bg-black opacity-20"></div></li>
                    <li class="rounded-full mx-2 h-4 w-4 flex items-center justify-center"><div class="rounded-full h-1 w-1 bg-black opacity-20"></div></li>
                </ul>
            </nav>
            <button class="btn btn-lg btn-primary mx-auto">Next</button>
        </div>



    </div>
</template>

<script>
export default {
    data() {
        return {
            stage: 0
        }
    },
  
    mounted() {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyjZVLZQdtXCYHa4Gud9EGNXfJSt0CrFmXbRNwIBgJMxgYzK77JoGG3DApb5uxv37Au/exec'
        const form = document.forms['submit-to-google-sheet']

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
    }
}
</script>
