<template>
    <div class="relative h-full">
        <button @click.prevent="viewConditions = !viewConditions" :class="`text-white bg-${newCondition.color} capitalize`">{{ newCondition.condition.replace(/_/g, ' ') }}</button>

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
            newCondition: {
                condition: this.task.condition,
                color: undefined,
            },
            conditions: [
                { condition: "in_progress", color: "gray" },
                { condition: "completed", color: "success" },
                { condition: "sent", color: "success" },
                { condition: "pending", color: "gray" },
                { condition: "overdue", color: "warning" }
            ],
            updatedTask: {
                id: this.task.id,
                condition: this.task.condition
            }
        }
    },
    mounted() {
        // this.newCondition.color = conditions[this.task.condition]
        // this.newCondition.condition = this.condition
    },
    methods: {
        updateCondition(condition) {
            this.newCondition.condition = condition.condition
            this.newCondition.color = condition.color

            this.updatedTask.condition = condition.condition

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
