<template>
    <div class="flex items-center justify-between">
        
            <InputUtilsDropdown ref="startTime" v-if="loaded" :options="start" :search="true" @update-value="updateStart" class="tracking-wider flex-grow mr-1" />
            <!-- <InputUtilsDropdown :options="['AM', 'PM']" class="w-16" /> -->
            <span class="flex-none">to</span>
            <InputUtilsDropdown ref="endTime" v-if="loaded" :options="end" :search="true" @update-value="updateEnd" class="tracking-wider flex-grow ml-1" />
        <!-- <InputUtilsDropdown :options="['AM', 'PM']" class="w-16" /> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            start: [],
            end: [],
            startTime: undefined,
            endTime: undefined,
            loaded: false
        }
    },
    mounted() {
        let times = []
        var x = 15; //minutes interval
        var tt = 0; // start time
        var ap = ['am', 'pm']; // AM-PM

        //loop to increment the time and push results in array
        for (var i=0;tt<24*60; i++) {
            var hh = Math.floor(tt/60); // getting hours of day in 0-24 format
            var mm = (tt%60); // getting minutes of the hour in 0-55 format

            if(mm < 10) mm = "0" + mm
            times[i] = { 
                title: (`${(hh === 0 || hh === 12)?12:hh%12}:${mm}${ap[Math.floor(hh/12)]}`),
                value: `${(hh < 10)?"0" + hh:hh}:${mm}:00`
            };
            tt = tt + x;
        }

        this.start = times
        this.end = times
        this.loaded = true
    },
    methods: {
        updateStart(e) {    
            console.log(e)
            // Remove end time if end time is before start time
            if(this.endTime < this.startTime) this.$refs.endTime.clear()
            
            this.end = this.end.filter(time => time.value > e)
        },
        updateEnd(e) {
            console.log(e)
        }
    }
}
</script>