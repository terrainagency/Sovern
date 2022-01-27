export class FormSequence {
    constructor(config) {
        this.config = config;
        this.stage = 0;
        this.forms = this.initForms();
        this.master = gsap.timeline();
        this.init();
    }
    initForms() {
        const formsArr = this.config.container.querySelectorAll("form");
        let arr = [];
        formsArr.forEach(form => {
            console.dir(form);
            let obj = {
                posX: form.offsetLeft - this.config.container.offsetLeft,
                height: form.scrollHeight + "px"
            }
            arr.push(obj);
        });
        return arr;
    }
    init() {
        if(this.config.nextBtn != undefined ) {
            this.config.nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.next();
            });
        }
        console.log(this);
    }
    next() {
        this.stage++
        if(this.config.loop == true && this.stage > this.forms.length - 1) {
            console.log("RETURN TO START");
            this.stage = 0;
        }
        console.log(this.stage);
        this.master.to(this.config.container, { scrollLeft: this.forms[this.stage].posX, height: this.forms[this.stage].height });
    }
}