<template>
    <div class="relative">
        <template v-if="!input">
            <input type="text" class="input input-md focus:border-black mb-2" v-model="output" @focus="show = true">

            <div v-if="show" class="absolute w-full z-50 p-2 bg-white border border-white-200 rounded-xl shadow-xl select-none">

                <!-- Navigation -->
                <nav class="grid grid-cols-7 gap-2 mb-5">
                    <div>
                        <div v-if="showPrev" v-on:click="prev" role="button" class="flex justify-center items-center h-10 select-none" tabindex="0">
                            <div class="border-l border-b border-black transform rotate-45 h-2 w-2"></div>
                        </div>
                    </div>
                    <div class="col-span-5 h-full">
                        <div ref="month" class="h-full flex items-center justify-center text-lg">{{ month }} {{ year }}</div>
                    </div>
                    <div>
                        <div v-if="showNext" v-on:click="next" role="button" class="flex justify-center items-center h-10 select-none" tabindex="0">
                            <div class="border-r border-t border-black transform rotate-45 h-2 w-2"></div>
                        </div>
                    </div>
                </nav>

                <!-- Days -->
                <div class="">
                    <ul class="grid grid-cols-7 tracking-wider relative text-gray/50">
                        <li v-for="day in daysArr" :key="day" class="text-center mb-2">{{ day.charAt(0) }}</li>
                    </ul>

                    <ul class="grid grid-cols-7 tracking-wider relative">
                        <li v-for="(day, i) in days" :key="day.date" class="relative text-center pb-full">
                            <input v-if="day.available" v-on:change="updateDate" type="radio" name="date" :id="`m${month}d${day.date}i${i}`" :value="day.value" v-model="selectedDate" />
                            <label v-if="day.available" :for="`m${month}d${day.date}i${i}`" class="input-date absolute top-0 right-0 left-0 bottom-0 hover:bg-white-100 rounded-full transition duration-150 flex items-center justify-center" role="button" tabindex="0">
                                {{ day.date }}
                                <svg v-if="day.current" class="absolute bottom-2 w-1 h-1 fill-current" viewBox="0 0 10 10">
                                    <circle cx="5" cy="5" r="5"/>
                                </svg>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
        <template v-if="input">
            <header class="mb-2">{{`${monthsArr[new Date(input).getMonth()]} ${new Date(input).getDate()}, ${new Date(input).getFullYear()}`}}</header>

            <div class="">
                <ul class="grid grid-cols-7 tracking-wider relative text-gray/50">
                    <li v-for="day in daysArr" :key="day" class="text-center mb-2">{{ day.charAt(0) }}</li>
                </ul>

                <ul class="grid grid-cols-7 tracking-wider relative">
                    <li v-for="day in days" :key="day.date" class="relative text-center pb-full">
                        <div v-if="day.selected" class="absolute top-0 right-0 left-0 bottom-0 bg-white-100 rounded-full flex items-center justify-center select-none">
                            {{ day.date }}
                        </div>
                        <div v-else class="absolute top-0 right-0 left-0 bottom-0 rounded-full flex items-center justify-center select-none">
                            {{ day.date }}
                        </div>
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        input: {
            type: String,
            required: false
        },
        past: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    data() {
        return {
            show: false,
            showPast: this.pase,
            showPrev: this.past,
            showNext: true,
            now: new Date(),
            monthsArr: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            daysArr: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            date: new Date().getDate(),
            days: [],
            selectedDate: undefined,
            output: undefined
        }
    },
    mounted() {
        if(!this.input) {
            this.month = this.monthsArr[this.month]
            this.populateDates()
        } else {
            this.showInput()
        }
    },
    methods: {
        updateDate() {
            const date = `${this.month} ${this.selectedDate}, ${this.year}`
            this.output = date
            this.$emit('output', this.output)

            this.show = false
        },
        populateDates() {
            const days = []
            const monthStartDate = new Date(`${this.month} 01, ${this.year}`)
            const firstDayOfMonth = monthStartDate.getDay()
            const totalDaysOfMonth = new Date(this.year, this.monthsArr.indexOf(this.month) + 1, 0).getDate();

            // Empty month days
            for(var i = 0; i < firstDayOfMonth; i++) { days.push("") }

            for(var i = 0; i < totalDaysOfMonth; i++) { 
                // Show available dates
                let obj = {
                    date: i+1,
                    current: this.isDateCurrent(i+1),
                    available: true,
                    value: (() => {
                        let val = i+1
                        if(i < 9) { val = `0${val}`}
                        return val
                    })()
                }
                days.push(obj) 
            }

            this.days = days
        },
        isDateCurrent(i) {
            return this.now.getDate() === i && this.now.getMonth() === this.monthsArr.indexOf(this.month) && this.now.getFullYear() === this.year
        },
        next() {
            let newMonth = this.monthsArr.indexOf(this.month) + 1;
            if(newMonth > 11) { newMonth = 0; this.year++; }
            this.month = this.monthsArr[newMonth];

            // Show/Hide Prev
            if(this.showPast && this.monthsArr.indexOf(this.month) !== this.now.getMonth()) this.showPrev = true

            this.populateDates();
        },
        prev() {
            let newMonth = this.monthsArr.indexOf(this.month) - 1;
            if(newMonth < 0) { newMonth = 11; this.year--; }
            this.month = this.monthsArr[newMonth];

            // Show/Hide Prev
            if(this.showPast && this.monthsArr.indexOf(this.month) === this.now.getMonth()) this.showPrev = false

            this.populateDates();
        },
        showInput() {
            const date = new Date(this.input)
            let currentDate = date.getDate()
            console.log(currentDate)
            let weekStart = date.setDate(date.getDate() - date.getDay())
            weekStart = new Date(weekStart)


            const days = []
            for(let i = 0; i < 7; i++) {
                days.push({
                    date: weekStart.getDate() + i,
                    selected: (()=> {
                        return currentDate === weekStart.getDate() + i
                    })()
                })
                // if(i === weekday) // the current date
            }
            console.log(days)
            this.days = days
            
            

            // const weekStartDate = new Date(this.input)
        }
    }
}
</script>