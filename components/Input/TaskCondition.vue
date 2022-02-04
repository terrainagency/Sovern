<template>
    <div class="relative h-full">
        <button @click.prevent="viewConditions = !viewConditions" :class="`text-white bg-${updatedColor} capitalize`">{{ updatedTask.condition.replace(/_/g, ' ') }}</button>

        <div v-if="viewConditions" class="absolute w-full h-full top-0 bg-white">            
            <button v-for="condition in conditions" :key="condition.condition" @click.prevent="updateCondition(condition)" :class="`bg-${condition.color} text-white mb-1 capitalize`">{{ condition.condition.replace(/_/g, ' ') }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            viewConditions: false,
            conditions: [
                { condition: "in_progress", color: "gray" },
                { condition: "completed", color: "success" },
                { condition: "sent", color: "success" },
                { condition: "pending", color: "gray" },
                { condition: "overdue", color: "warning" }
            ],
            updatedColor: undefined,
            updatedTask: {
                id: this.task.id,
                condition: this.task.condition
            }
        }
    },
    mounted() {
        this.updatedColor = this.conditions.find(({condition}) => condition === this.task.condition).color
    },
    methods: {
        updateCondition(condition) {
            this.updatedTask.condition = condition.condition
            this.updatedColor = this.conditions.find(({condition}) => condition === this.updatedTask.condition).color

            // Post update to APIs
            this.updateTask()

            this.viewConditions = false
        },
        async updateTask() {
            await fetch(`/api/tasks/update`, {
                method: 'POST',
                body: JSON.stringify(this.updatedTask),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        openConditions() {

        }
    }
}
</script>
