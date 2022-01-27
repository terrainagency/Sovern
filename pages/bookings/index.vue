<template>
    <div class="flex flex-col items-center">
        <div class="fixed top-0 right-0 left-0 bottom-0 -z-10">
            <img src="~/assets/images/banner_dark.jpg">
        </div>
        <BookingHeader></BookingHeader>

        <form class="bg-white shadow-2xl rounded-xl p-12 max-w-lg" name="submit-to-google-sheet">
            <h1 class="text-7xl mb-5 text-center">Waitlist</h1>
            <p>Be the first to know when new photoshoot time slots become available in your city.</p>
            <div class="pt-5 pb-8">
                <p>1. Pick your city</p>

                <input type="radio" name="city" id="new-york" value="New York, NY">
                <label for="new-york" class="checkbox">New York, NY</label>

                <input type="radio" name="city" id="los-angeles" value="Los Angeles, CA">
                <label for="los-angeles" class="checkbox">Los Angeles, CA</label>

                <input type="radio" name="city" id="austin" value="Austin, TX">
                <label for="austin" class="checkbox">Austin, TX</label>

                <input type="radio" name="city" id="dallas" value="Dallas, TX">
                <label for="dallas" class="checkbox">Dallas, TX</label>

                <input type="radio" name="city" id="dallas" value="Dallas, TX">
                <label for="dallas" class="checkbox">Salt Lake City, UT</label>
                <!-- <input type="text" name="name" placeholder="Name">
                <input type="text" name="instagram" placeholder="Instagram">
                <input type="email" name="email" placeholder="Email">
                <input type="tel" name="phone" placeholder="Phone">
                <input type="text" name="city" placeholder="City"> -->
            </div>
            <button type="submit" class="btn btn-lg btn-primary mx-auto">Next</button>
        </form>



    </div>
</template>

<script>
export default {
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
