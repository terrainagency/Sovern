<template>
<div>
    <div>[Projects List]</div>
    <h2>Create a project</h2>
    <form action="">

    </form>
</div>

</template>

<script>
export default {
    data() {
        return {
            project: {
                clientID: '',
                companyID: '',
                geoLocation: {
                    latitude: '',
                    longitude: ''
                },
                startTime: '',
                endTime: '',
                price: '',
                service_id: ''
            }
        }
    },
    methods: { 
        async createProject() {
            const graphQLClient = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/cktunnv680pby01w52lp7c0xv/master')

            const mutation = gql`
                mutation AddProject(
                    $clientID: String!,
                    $companyID: String!,
                    $address: String!, 
                    $startTime: String!, 
                    $endTime: String!, 
                    $price: String!, 
                    $service_id: ID) 
                {
                    createProject(
                        data: {
                            clientID: $clientID, 
                            companyID: $companyID, 
                            address: $address, 
                            startTime: $startTime, 
                            endTime: $endTime, 
                            price: $price, 
                            service: {
                                connect: {
                                    id: $service_id
                                }
                            }
                        }
                    ){
                        clientID
                        companyID
                        address
                        startTime
                        endTime
                        price
                        id
                    }
                }
            `
            const variables = {
                clientID: this.project.clientID,
                companyID: this.project.companyID,
                address: this.project.address,
                startTime: this.project.startTime,
                endTime: this.project.endTime,
                price: this.project.price,
                service_id: this.project.service_id
            }
            const data = await graphQLClient.request(mutation, variables)
            console.log(JSON.stringify(data, undefined, 2))
        },
    }
}
</script>
