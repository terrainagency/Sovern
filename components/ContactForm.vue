<template>
    <div class="fixed top-0 right-0 left-0 bottom-0 z-10" :class="{ 'pointer-events-none': !open, 'pointer-events-auto': open }" @click.prevent="closeFormsParent($event)"> 

        <!-- Container -->
        <div class="fixed bottom-4 md:bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-[600px]" :class="{ 'pointer-events-none': !open, 'pointer-events-auto': open }">

            <!-- Forms -->
            <div id="contact-form-container" class="w-full p-2 md:p-4 lg:p-14 bg-white rounded-3xl shadow-lg -mb-6 z-10 max-h-[80vh] flex flex-col items-start hidden opacity-0 transform translate-y-10 overflow-y-scroll">
                <div class="mb-8">
                    <h1 class="font-title mb-5 text-3xl text-center flex justify-center">
                        <div id="formContact" @click="changeTo('contact')" class="px-4 transition duration-150 cursor-pointer" :class="{ 'text-gray-800 hover:text-black': current !== 'contact' }">Get in touch</div>

                        <div id="formContact" @click="changeTo('apply')" class="px-4 transition duration-150 cursor-pointer" :class="{ 'text-gray-800 hover:text-black': current !== 'apply' }">Join our team</div>
                    </h1>
                </div>

                <!-- Form Container -->
                <div class="flex w-full overflow-hidden items-start">
                    <form name="contact" class="w-full flex-shrink-0 mr-14"> 
                        <div class="mb-8">
                            <p>We're a friendly, passionate, and driven studio dedicated to delivering ethical fashion luxury imaging. Tell us what's on your mind, and we'll be in touch shortly.</p><p>If you're looking to connect or have any questions regarding our services, let us know and we'll be happy to help 👋</p>
                        </div>

                        <div class="relative mb-3">
                            <input type="text" name="name">
                            <label class="label">Name</label>
                        </div>
                        <div class="relative mb-3">
                            <input type="email" name="email">
                            <label class="label">Email</label>
                        </div>

                        <label for="message" class="block text-xs font-bold uppercase tracking-wider mb-3 mt-8">Message</label>
                        <textarea name="message"></textarea>
                    </form>
                    <form name="apply" class="w-full flex-shrink-0 ml-14 max-h-0"> 
                        <div class="mb-8">
                            <p>We're always looking for cutting edge creative talent to work with on our projects.</p><p>If contributing to the ethical future of the fashion industry excites you, reach out below.</p>  
                        </div>

                        <div class="relative mb-3">
                            <input type="text" name="name">
                            <label class="label">Name</label>
                        </div>
                        <div class="relative mb-3">
                            <input type="email" name="email">
                            <label class="label">Email</label>
                        </div>

                        <label for="location" class="block text-xs font-bold uppercase tracking-wider mb-3 mt-8">Location</label>
                        <div class="relative mb-3">
                            <input type="text" name="location">
                        </div>

                        <label for="role" class="block text-xs font-bold uppercase tracking-wider mb-3 mt-8">Role</label>
                        <div class="relative mb-3">
                            <input type="text" name="role">
                        </div>

                        <label for="message" class="block text-xs font-bold uppercase tracking-wider mb-3 mt-8">Portfolio</label>
                        <div class="relative mb-3">
                            <input type="email" name="email">
                        </div>

                        <label for="message" class="block text-xs font-bold uppercase tracking-wider mb-3 mt-8">Message</label>
                        <textarea name="message"></textarea>
                    </form>
                </div>
            </div>
            <!-- Button -->
            <div class="relative flex justify-center px-20 pointer-events-auto">
                <div class="btn py-4 px-6 btn-white max-w-screen-xs mx-2 w-auto" role="button" @click.prevent="open ? closeForms() : openForms()">
                    <div v-if="!open" id="btn-contact">Contact</div>
                    <div v-else class="border-l-2 border-b-2 border-black transform translate-x-[1px] rotate-45 w-2 h-2"></div>
                </div>
                <input id="btn-submit" type="submit" value="Send" class="btn py-5 btn-primary w-full w-full mx-2 opacity-0 transform translate-y-2 hidden">
            </div>
        </div>
        <div class="hidden">
            <p>We'll be in touch. If you don't receieve a response within 24 hours please email us directly at studio@tonyredmer.com.</p>    
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
            contact: true,
            current: 'contact'
        }
    },
    methods: {
        openForms: function() {
            let tl = gsap.timeline()
            tl.to('#contact-form-container', { duration: 0.5, y: 0, autoAlpha: 1, display: 'block', ease: 'power4.out' }, 0)
                .to('#btn-submit', { duration: 0.2, y: 0, autoAlpha: 1, display: 'flex' }, "<");

            this.open = true
        },
        closeForms: function() {
            let tl = gsap.timeline()
            tl.to('#btn-submit', { duration: 0, y: 8, autoAlpha: 0, display: 'none' }, 0)
                .to('#contact-form-container', { duration: 0.2, y: 40, autoAlpha: 0, ease: 'power2.in' }, 0);
                
            this.open = false
        },
        closeFormsParent: function(e){
            if(e.target === e.currentTarget) {
                this.closeForms();
            }
        },
        changeTo: function(name) {
            let forms = this.$el.querySelectorAll('form')           
            let target = [...forms].find(form => form.attributes["name"].value === name)        
            let posX = target.offsetLeft - target.parentElement.offsetLeft
            let height = target.scrollHeight

            let tl = gsap.timeline()
            tl.to(target, { duration: 0.2, maxHeight: 9999 }, ">")
                .to(target.parentElement, { duration: 0.3, scrollLeft: posX, height: height, ease: 'Power4.out' }, 0)
            
            this.current = name
        }
    },
    mounted() {
        // let firstForm = this.$el.querySelector("form")

        // console.dir(firstForm)
        // firstForm.parentElement.style.maxHeight = firstForm.scrollHeight + 'px'
    }
}
// class FormSequence {
//     constructor(config) {
//         this.config = config;
//         this.stage = 0;
//         this.forms = this.initForms();
//         this.master = gsap.timeline();
//         this.init();
//     }
//     initForms() {
//         const formsArr = this.config.container.querySelectorAll("form");
//         let arr = [];
//         formsArr.forEach(form => {
//             console.dir(form);
//             let obj = {
//                 posX: form.offsetLeft - this.config.container.offsetLeft,
//                 height: form.scrollHeight + "px"
//             }
//             arr.push(obj);
//         });
//         return arr;
//     }
//     init() {
//         if(this.config.nextBtn != undefined ) {
//             this.config.nextBtn.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 this.next();
//             });
//         }
//         console.log(this);
//     }
//     next() {
//         this.stage++
//         if(this.config.loop == true && this.stage > this.forms.length - 1) {
//             console.log("RETURN TO START");
//             this.stage = 0;
//         }
//         console.log(this.stage);
//         this.master.to(this.config.container, { scrollLeft: this.forms[this.stage].posX, height: this.forms[this.stage].height });
//     }
// }

// export default {
//     ready() {
//         const sequence = new FormSequence({
//             container: this.$el.querySelector("#contactFormContainer"),
//             nextBtn: this.$el.querySelector("#formApply"),
//             loop: true,
//         });

//         toggleContactForms = () => {
//             console.log("TOGGLE FORMS");
//         }
//     }
// }
</script>
