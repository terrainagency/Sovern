<template>
    <div class="relative">
        <!-- <div class="text-center">March 26th, 1995</div> -->
        <input type="text" class="input input-md" @focus="showDatePicker = true">
        <!-- Dates -->
        <div v-if="showDatePicker" class="absolute w-full z-50 p-2 bg-white border border-white-200 rounded-xl shadow-xl select-none">
            <!-- Hidden input -->
            <!-- <input type="text" name="startTime" :value="`${selectedDate}T${selectedTime}`" disabled  class="hidden"/>
            <input type="text" name="endTime" :value="endTime" disabled  class="hidden"/> -->

            <!-- Navigation -->
            <nav class="grid grid-cols-7 gap-2 mb-5">
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
            <div class="grid grid-cols-7 gap-2 tracking-wider relative">

                <div v-for="(day, i) in days" :key="`d${day}-${i}`" class="w-full flex items-center justify-center text-black opacity-30 select-none">{{ daysAbbr[i] }}</div>
                    
                <!-- Fallback for deselection -->
                <input type="radio" v-on:change="updateDate" ref="dayFallback" name="r9n32d0m" :value="undefined" v-model="selectedDay" />

                <div v-for="(day, i) in currentMonthDays" :key="`cmd${day}-${i}`" class="w-full pb-full relative">

                    <div v-if="day" class="absolute h-full w-full flex items-center justify-center">
                        <template v-if="day.available">
                            <input v-on:change="updateDate" type="radio" name="r9n32d0m" :id="`m${month}d${day.date}i${i}`" :value="day.value" v-model="selectedDay" />
                            <label :for="`m${month}d${day.date}i${i}`" class="input-date absolute top-0 right-0 left-0 bottom-0 hover:bg-white-100 rounded-full transition duration-150 flex items-center justify-center" role="button" tabindex="0">{{ day.date }}</label>
                        </template>
                        <div v-else class="opacity-50 absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">{{ day.date }}</div>
                        
                        <div v-if="day.current" class="w-1 h-1 rounded-full bg-black absolute left-1/2 transform -translate-x-1/2 bottom-2"></div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            showDatePicker: false,
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
            trueStartDate: new Date(this.startDate),
            trueEndDate: new Date(this.endDate),
            showPrev: false,
            showNext: true,
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
            let days = []
            let obj = {}
            let monthStartDate = new Date(`${this.month} 01, ${this.year}`)

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
        },
        isDateCurrent: function(i) {
            return this.currentDate === i && this.currentMonth === this.month && this.currentYear === this.year
        },
        isDateAvailable(i) {
            let val = true
            if(this.currentDate-1 >= i && this.currentMonth === this.month && this.currentYear === this.year) val = false
            return val
        },
        updateDate() {
            if(this.selectedDay != "") this.selectedDate = `${this.months[parseInt(this.monthNum) - 1]} ${this.selectedDay}, ${this.year}`
            this.$emit('update-date', this.selectedDate)
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
    }
}
</script>
