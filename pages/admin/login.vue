<template>
    <div class="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
        <header class="mb-10">
            <SovernLogo v-bind:darkMode="true" v-bind:size="`w-12 h-12`" />
        </header>
        <form action="" class="w-full max-w-xs mb-10">
            <fieldset class="mb-2">
                <input type="text" name="email" />
                <input type="password" name="password" />
            </fieldset>
            <button type="submit" class="btn btn-lg btn-white w-full max-w-xs mx-auto">Login</button>
        </form>
        <a href="/" class="text-gray font-light">Forgot password?</a>
    </div>
</template>

<script>

</script>
