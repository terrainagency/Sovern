<template>
    <div>
        <div class="mb-4">
            <div class="text-sm mb-1">Date</div>
            <InputUtilsDatePicker @output="updateDate" :past="true" />
            
            <button class="text-sm text-gray hover:text-black flex items-center">{{ timeZone }}</button>

        </div>


        <div class="mb-2">
            <div class="text-sm mb-1">Timing</div>
            <div class="flex items-center justify-between">

                <InputUtilsDropdown ref="startTime" v-if="loaded" :options="start" :search="true" :placeholder="'Start'" @output="updateStart" class="tracking-wider flex-grow mr-1" />
                
                <span class="flex-none px-3 text-gray/50">to</span>
                
                <InputUtilsDropdown ref="endTime" v-if="loaded" :options="end" :search="true" :placeholder="'End'" @output="updateEnd" class="tracking-wider flex-grow ml-1" />
            </div>
        </div>  
    </div>
</template>

<script>
import { timezones } from '~/utils/time'
export default {
    data() {
        return {
            start: [],
            end: [],
            date: '',
            startTime: '',
            endTime: '',
            loaded: false,
            timezones: timezones,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            output: ''
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
        updateDate(e) { 
            this.date = e 
            this.update()
        },
        updateStart(e) {    
            this.startTime = e

            if(this.startTime >= this.endTime) this.$refs.endTime.clear()
            this.end = this.end.filter(time => time.value > e)
            this.update()
        },
        updateEnd(e) {
            this.endTime = e
            this.update()
        },
        update() {
            this.output = {
                start: new Date(`${this.date} ${this.startTime}`),
                end: new Date(`${this.date} ${this.endTime}`),
                timeZone: this.timeZone
            }
            this.$emit('output', this.output)
        }
    }
}
</script>