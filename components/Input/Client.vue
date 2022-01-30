<template>
    <div class="relative">
        
        <input v-on:click="openDropdown" v-on:keyup="searchDropdown" ref="dropdownInput" class="input input-md mb-2" placeholder="Add client">

        <div v-if="clientsSelected.length > 0" class="">
            <div v-for="client in clientsSelected" :key="`selected-${client.id}`" class="py-2 px-3 mb-2 mr-2 rounded-lg bg-white-200 inline-block text-gray text-sm select-none">
                <span class="mr-1">{{ client.name }}</span>
                <button class="text-gray" title="Remove client">x</button>
            </div>  
        </div>
        
        
        <!-- <div class="relative mb-2">
            <button class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white-100 shadow-sm hover:bg-black hover:text-white transition duration-150 rounded-lg py-2 px-3 text-sm">+</button>
        </div> -->
        <div v-if="showDropdown" class="z-50 absolute w-full bg-white border rounded-md border-black/10 shadow-lg max-h-48 overflow-y-scroll scrollbar-none">
            <div v-for="client in clientsDisplayList" :key="`list-${client.id}`" v-on:click="addClient(client.name, client.id)" class="flex justify-between py-2 hover:bg-white-100 select-none px-3 text-sm">
                <span>{{ client.name }}</span>
                <span class="text-gray">{{ client.email }}</span>
            </div>
            <div v-on:click="closeDropdown" class="flex justify-between py-2 hover:bg-white-100 select-none px-3 text-sm text-gray">
                Create new client
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            clientID: [''],
            clientsSelected: [],
            clientsDisplayList: [],
            clients: [
                { id: 'cxw0329dj2e4d9jd2901', name: 'Stella Redmer', email: 'stella@gooddog.com' },
                { id: 'c0wr3asdfedj2d9jdsd', name: 'Patrizio Chiquini', email: 'patrizio@hotmail.com' },
                { id: 'cwwi329djsderfhghg2d', name: 'Andrew Peters', email: 'afpeters95@gmail.com' },
                { id: 'cxw03qr29dj2d9jd2901', name: 'Stella Redmer', email: 'stella@gooddog.com' },
                { id: 'c0wr3asdfderj2d9jdsd', name: 'Natural Models LA', email: 'patrizio@hotmail.com' },
                { id: 'cwwi329dwetjsdfhghg2d', name: 'WeSpeak Models New York', email: 'afpeters95@gmail.com' },
                { id: 'cxw0329djuy2d9jd2901', name: 'Stella Redmer', email: 'stella@gooddog.com' },
                { id: 'c0wr3asdfdj2ddsgh9jdsd', name: 'Patrizio Chiquini', email: 'patrizio@hotmail.com' },
                { id: 'cwwi329djsdfhghgasdf2d', name: 'Andrew Peters', email: 'afpeters95@gmail.com' },
            ],
            showDropdown: false
        }
    },
    mounted() {
        this.clientsDisplayList = this.clients
    },
    methods: {
        closeDropdown() {
            this.clientsDisplayList = this.clients
            this.showDropdown = false;
        },
        openDropdown() {
            this.showDropdown = true;
        },
        addClient(name, id) {
            this.clientsSelected.push({ name: name, id: id})
            this.clientsDisplayList = this.clientsDisplayList.filter(obj => obj.id !== id)
            this.closeDropdown()
        },
        searchDropdown(e) {
            const value = e.target.value

            let regex = new RegExp(value, 'gi')
            this.clientsDisplayList = this.clients.filter(obj => obj.name.match(regex))
        }
    }
}
</script>
