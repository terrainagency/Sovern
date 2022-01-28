<template>
    <div class="bg-white w-full px-10">
        <!-- Dashboard -->
    </div>
</template>
<script>
import Cookie from 'js-cookie'

export default {
    asyncData({ $config, redirect }){
        if(!Cookie.get($config.auth.cookieName)){
            redirect('/no-acces/')
            return
        }
    }
}
</script>
