<template>
    <div class="mb-10">
        <!-- <div class="text-center">March 26th, 1995</div> -->

        <!-- Dates -->
        <div class=" select-none">
            <!-- Hidden input -->
            <input type="text" name="startTime" :value="`${selectedDate}T${selectedTime}`" disabled  class="hidden"/>
            <input type="text" name="endTime" :value="endTime" disabled  class="hidden"/>

            <!-- Navigation -->
            <nav class="grid grid-cols-7 gap-2 my-5">
                <div>
                    <div v-if="showPrev" v-on:click="prevMonth" role="button" class="flex justify-center items-center h-10 select-none" tabindex="0">
                        <div class="border-l border-b border-black transform rotate-45 h-2 w-2"></div>
                    </div>
                </div>
                <div class="col-span-5 h-full">
                    <div ref="month" class="h-full flex items-center justify-center text-lg">{{ month }} {{ year }}</div>
                </div>
                <div>
                    <div v-if="showNext" v-on:click="nextMonth" role="button" class="flex justify-center items-center h-10 select-none" tabindex="0">
                        <div class="border-r border-t border-black transform rotate-45 h-2 w-2"></div>
                    </div>
                </div>
            </nav>

            <!-- Days -->
            <div class="grid grid-cols-7 gap-2 mb-8 tracking-wider relative">
                <div v-if="hideAvailableDates" class="bg-white/80 absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center z-20">
                    <div class="bg-white shadow-lg rounded-full py-3 px-5 border border-gray/10 text-sm">No times in {{ month }}</div>
                </div>

                <div v-for="(day, i) in days" :key="`d${day}-${i}`" class="w-full flex items-center justify-center text-black opacity-30 select-none">{{ daysAbbr[i] }}</div>
                    
                <!-- Fallback for deselection -->
                <input type="radio" v-on:change="updateDate" ref="dayFallback" name="r9n32d0m" :value="undefined" v-model="selectedDay" />

                <div v-for="(day, i) in currentMonthDays" :key="`cmd${day}-${i}`" class="w-full pb-full relative">

                    <div v-if="day" class="absolute h-full w-full flex items-center justify-center">
                        <input v-if="day.available" v-on:change="updateDate" type="radio" name="r9n32d0m" :id="`m${month}d${day.date}i${i}`" :value="day.value" v-model="selectedDay" />
                        <label v-if="day.available" :for="`m${month}d${day.date}i${i}`" class="absolute top-0 right-0 left-0 bottom-0 input-date flex items-center justify-center" role="button" tabindex="0">{{ day.date }}</label>
                        
                        <div v-else class="text-gray">{{ day.date }}</div>

                        <div v-if="day.current" class="w-1 h-1 rounded-full bg-black absolute left-1/2 transform -translate-x-1/2 bottom-2"></div>
                    </div>
                    <div v-else></div>
                </div>
            </div>

            <!-- Fallback for deselection -->
            <input type="radio" v-on:change="updateTime" ref="timeFallback" name="timeSlot" :value="undefined" v-model="selectedHour" />

            <div v-for="(slot, i) in availableTimes" :key="`${slot}-${i}`">
                <input v-on:change="updateTime" type="radio" name="timeSlot" :id="`t${slot}i${i}`" :value="slot" v-model="selectedHour" />
                <label :for="`t${slot}i${i}`" class="checkbox" tabindex="0">
                    {{ slot }}
                </label>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        startDate: {
            type: String,
            required: false
        },
        endDate: {
            type: String,
            required: false
        },
        schedulingRange: {
            type: Number,
            required: false
        },
        schedulingBuffer: {
            type: Number,
            required: false
        },
        timeSlots: {
            type: Array,
            required: false
        },
        isAvailable: {
            type: Boolean,
            required: false
        },
        duration: {
            type: Number,
            required: false
        },
        timezone: {
            type: String,
            required: false
        }
    },
    data() { 
        return {
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            daysAbbr: ['S','M','T','W','T','F','S'],
            now: new Date(),
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth(),
            currentDate: new Date().getDate(),
            monthNum: new Date().getMonth(),
            year: new Date().getFullYear(),
            month: undefined,
            selectedDay: undefined,
            selectedDate: undefined,
            selectedHour: undefined,
            selectedTime: undefined,
            trueStartDate: new Date(this.startDate),
            trueEndDate: new Date(this.endDate),
            showPrev: false,
            showNext: true,
            availableDates: 0,
            hideAvailableDates: true,
            startTime: '',
            endTime: '',
            availableDays: (() => {
                if(this.timeSlots != undefined) {
                    let arr = []
                    this.timeSlots.forEach(slot => {
                        for (const [key, value] of Object.entries(slot)) {
                            arr.push(key)
                        }
                    })
                    return [...new Set(arr)]
                }
            })(),
            availableTimes: undefined,
            currentMonthDays: undefined
        }
    },
    methods: {
        prevMonth: function() {
            let newMonth = this.months.indexOf(this.month) - 1;
            if(newMonth < 0) { newMonth = 11; this.year--; }
            this.month = this.months[newMonth];

            this.populateDates();
        },
        nextMonth: function() {
            let newMonth = this.months.indexOf(this.month) + 1;
            if(newMonth > 11) { newMonth = 0; this.year++; }
            this.month = this.months[newMonth];

            this.populateDates();
        },
        populateDates: function() {
            this.deselectDay();

            let days = []
            let obj = {}
            let monthStartDate = new Date(`${this.month} 01, ${this.year}`)
            this.availableDates = 0;

            this.monthNum = this.months.indexOf(this.month) + 1
            if(this.monthNum < 10) { this.monthNum = `0${this.monthNum}`}

            // Hide prev button for past tense months
            if(monthStartDate <= this.now) { this.showPrev = false } else { this.showPrev = true }

            const firstDay = monthStartDate.getDay()
            for(var i = 0; i < firstDay; i++) { days.push("") }
            const totalDays = new Date(this.year, this.months.indexOf(this.month) + 1, 0).getDate();

            for(var i = 0; i < totalDays; i++) { 
                // Show available dates
                let obj = {
                    date: i+1,
                    current: this.isDateCurrent(i+1),
                    available: this.isDateAvailable(i+1),
                    value: (() => {
                        let val = i+1
                        if(i < 9) { val = `0${val}`}
                        return val
                    })()
                }
                days.push(obj) 
            }

            this.currentMonthDays = days

            if(this.availableDates > 0) { 
                this.hideAvailableDates = false 
                this.showNext = true
            } 
            else if(this.availableDates === 0 && monthStartDate < this.trueStartDate) {
                this.hideAvailableDates = true 
                this.showNext = true
            } 
            else { 
                this.hideAvailableDates = true 
                this.showNext = false
            }            
        },
        isDateCurrent: function(i) {
            if(this.currentDate === i && this.currentMonth === this.month && this.currentYear === this.year) {
                return true
            }
        },
        isDateAvailable: function(i) {
            if(this.isAvailable) {
                let monthNum = this.months.indexOf(this.month) + 1;

                if(i < 10) { i = `0${i}` }
                if(monthNum < 10 ) { monthNum = `0${monthNum}` }

                let date = new Date(`${this.year}-${monthNum}-${i}`)

                // Eventually will need to handle Scheduling range
                // 1. Start date not specified: will create a start date of Today
                // 2. End date not specified: will create an end date X days from Today
                // console.log(this.schedulingRange)

                // Check if date is within collection start/end times
                if(date >= this.trueStartDate && date <= this.trueEndDate) {

                    // Check if date lands on an available day of the week
                    if(this.availableDays.indexOf(this.days[date.getDay() + 1]) >= 0) {

                        // FLAG: Next step would be to integrate with google
                        this.availableDates++;
                        return true
                    }   
                }
            }
        },
        updateDate() {
            this.deselectTime();

            if(this.selectedDay != "") {this.selectedDate = `${this.year}-${this.monthNum}-${this.selectedDay}`} else { this.selectedDate = undefined };

            // Find matching time slots
            let weekday = this.days[new Date(this.selectedDate).getDay() + 1]
            let arr = []

            this.timeSlots.forEach(slot => {
                for (const [key, value] of Object.entries(slot)) {
                    if(key === weekday) { arr.push(value) }
                }
            })
            this.availableTimes = arr;
        },
        updateTime() {
            let time = this.selectedHour.split(" ");
            if(time[1] === 'AM') {
                let newtime = parseInt(time[0])
                if(newtime < 10) { time = `0${time[0]}`}
            } else if(time[1] === 'PM') {
                let newtime = time[0].split(":")
                time = `${parseInt(newtime[0]) + 12}:${newtime[1]}`
            } else {
                console.log("ERROR: Time format in selectedHour does not match 'AM' or 'PM'")
            }
            this.selectedTime = `${time}:00-${this.timezone}`

            // Create end date
            time = parseInt(time) + this.duration;
            if(time < 10) {
                time = `0${newEndTime}`
            }

            this.startTime = `${this.selectedDate}T${this.selectedTime}`
            this.endTime = `${this.selectedDate}T${time}:00:00-${this.timezone}`

            // Send data back to parent component
            this.$emit('clicked-end-time', { startTime: this.startTime, endTime: this.endTime })
        },
        deselectDay() {
            this.$refs.dayFallback.checked = true
            this.selectedDay = undefined
            this.selectedDate = undefined
            this.selectedTime = undefined
            this.availableTimes = undefined
        },
        deselectTime() {
            this.$refs.timeFallback.checked = true
            this.selectedHour = undefined
            this.selectedTime = undefined
            this.endTime = undefined
        }
    },
    mounted() {
        this.month = this.months[this.monthNum];
        this.currentMonth = this.months[this.currentMonth];

        // If this.startDate is earlier than today, change start date to today + this.schedulingBuffer


        if(this.startDate === null || this.trueStartDate < this.now) {
            let newStartDate = new Date()
            newStartDate.setDate(newStartDate.getDate() + parseInt(this.schedulingBuffer))

            this.trueStartDate = newStartDate;
        }


        if(this.endDate == null && this.schedulingRange !== null) {
            let rangeEnd = new Date();
            rangeEnd.setDate(rangeEnd.getDate() + parseInt(this.schedulingRange))

            if(this.trueEndDate == undefined || this.trueEndDate > rangeEnd) {
                this.trueEndDate = rangeEnd
            }
        }

        console.log(this.trueStartDate)
        console.log(this.trueEndDate)


        this.populateDates();

        if(this.availableDates === 0){
            if(this.trueStartDate > this.now) {
                this.month = this.months[this.trueStartDate.getMonth()]
                this.populateDates()
            } else {
                this.nextMonth();
            }
        } 
    }
}
</script>
