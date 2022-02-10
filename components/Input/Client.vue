<template>
    <div class="relative">
        <div class="flex flex-wrap input max-h-32 overflow-y-scroll p-0.5 mb-2">
            <div v-for="client in selectedClients" :key="`selected-${client.id}`" class="w-1/2 p-0.5">
                <div class="relative flex bg-white-100 rounded-md h-full overflow-hidden px-3 py-1 items-center justify-between transition duration-150">
                    <div class="relative overflow-x-hidden mr-2 flex-grow">
                        <span class="text-sm whitespace-nowrap">{{ client.name }}</span>
                        <div class="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-white-100 to-transparent w-4"></div>
                    </div>
                    
                    <button @click="removeClient(client)" class="text-gray hover:text-black" title="Remove client">x</button>
                    
                    <div :ref="`dis-${client.id}`" class="pointer-events-none absolute top-0 right-0 left-0 bottom-0 bg-black/5 opacity-0"></div>

                </div>  
            </div>

            <input v-on:click="open" @keyup="searchDropdown" @keyup.delete="removeLastClient" v-model="query" ref="dropdownInput" placeholder="Add client" class="bg-transparent px-2 h-12 w-1/2 flex-grow focus:outline-none">
        </div>
        
        <div v-if="show" class="z-50 absolute w-full bg-white border rounded-md border-black/10 shadow-lg max-h-48 overflow-y-scroll scrollbar-none">
            <div v-for="option in options" :key="`list-${option.id}`" v-on:click="addClient(option)" class="highlight-parent relative flex justify-between py-2 select-none px-3 text-sm">
                <div class="relative overflow-x-hidden mr-2 flex-grow">
                    <span class="text-sm whitespace-nowrap">{{ option.name }}</span>
                    <div class="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-white to-transparent w-4"></div>
                </div>
                <span class="text-gray">{{ option.email }}</span>
                <div class="highlight bg-black/5 opacity-0 absolute top-0 right-0 left-0 bottom-0 pointer-events-none"></div>
            </div>
            <div v-on:click="createClient = true" class="flex justify-between py-2 hover:bg-white-100 select-none px-3 text-sm text-gray">
                Create new client
            </div>
        </div>
        <ModalCreateClient v-if="createClient" @close="createClient = false" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            output: null,
            selectedClients: [],
            options: [],
            toggleDeletion: false,
            createClient: false,
            clients: [
                { id: 'cxw0329dj2dfe4d9jd2901', name: 'Stella Redmer', email: 'stella@gooddog.com' },
                { id: 'c0wr3asadfsdfedj2d9jdsd', name: 'Patrizio Chiquini', email: 'patrizio@hotmail.com' },
                { id: 'cwwi329adfdjsderfhghg2d', name: 'Andrew Peters', email: 'afpeters95@gmail.com' },
                { id: 'c0wr3afdsdfderj2d9jdsd', name: 'Natural Models LA', email: 'patrizio@hotmail.com' },
                { id: 'cwwi329dsdfwetjsdfhghg2d', name: 'WeSpeak Models New York', email: 'afpeters95@gmail.com' },
            ],
            show: false,
            query: ''
        }
    },
    mounted() {
        this.sort(this.clients)
        this.options = this.clients
    },
    methods: {
        open() {
            if(!this.show) window.addEventListener('click', this.close)
            this.show = true
        },
        close(e) {
            if (!this.$el.contains(e.target)) {
                this.show = false;
                window.removeEventListener('click', this.close)
            }
        },
        reset() {
            this.options = this.clients.filter(obj => !this.selectedClients.includes(obj))
        },
        addClient(client) {
            this.selectedClients.push(client)
            this.reset()
            this.show = false
            this.query = ''
        },
        searchDropdown() {
            if(this.query.length > 0) {
                this.toggleDeletion = false;
                
                let regex = new RegExp(this.query, 'gi')
                this.reset()
                let list = this.options.filter(obj => obj.name.match(regex))
                this.options = list
            }
        },
        removeClient(client) {
            this.selectedClients = this.selectedClients.filter(obj => obj.id !== client.id)
            this.reset()
        },
        removeLastClient() {
            if(this.selectedClients.length > 0 && this.query.length === 0) {
                let obj = this.selectedClients[this.selectedClients.length - 1]
                let target = this.$refs[`dis-${obj.id}`][0]

                if(this.toggleDeletion) { 
                    console.log("TRIGGER DELETION")
                    this.selectedClients.pop()
                    this.reset()
                } 
                else { target.style.opacity = 1 } 

                this.toggleDeletion = !this.toggleDeletion
            }
        },
        sort(arr) {
            arr.sort(function(a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        },
        
    }
}
</script>
