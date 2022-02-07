<template>
    <div v-if="image" @click.prevent="image = undefined" class="fixed top-0 right-0 left-0 bottom-0 backdrop-blur-sm bg-black/20">
        <figure @click.stop="" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl">
            <div class="w-full relative">
                <img @click="addComment" :src="image.url" class="w-full rounded-3xl shadow-xl border border-black/5" />

                <form @submit.prevent="createComment" class="absolute left-0 w-full max-w-screen-xs z-50" :style="`left: ${newComment.locationX}%; top: ${newComment.locationY}%`">
                    <div class="w-3 h-3 rounded-full bg-white"></div>

                    <div class="bg-white rounded-3xl w-full ml-1 shadow-xl border border-black/5 flex">
                        <div class="rounded-full m-1 h-10 w-10 overflow-hidden bg-white shadow-lg border border-black/5 flex-none">
                        <!-- {{ user}} -->
                            <img :src="user.image" class="w-full h-full object-cover" />
                        </div>

                        <InputUtilsTextarea class="w-full my-1" :singleLine="true" :placeholder="'Write your comment...'" />
                        <!-- <input type="text" v-model="newComment.comment" class="h-full w-full pl-2 focus:outline-none bg-transparent" /> -->
                    </div>
                </form>
            </div>
            <!-- <figcaption class="w-1/2 bg-white">
                <div v-for="comment in image.comments" :key="comment.id">
                    {{ comment }}
                </div>
            </figcaption> -->
        </figure>
    </div>
</template>
<script>
export default {
    props: {
        image: {
            type: Object
        }
    },
    data() {
        return {
            addNewComment: false,
            newComment: {
                locationX: null,
                locationY: null,
                comment: '',
                imageID: null
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.auth.user
        },
    },
    mounted() {
        this.newComment.imageID = this.image
    },
    methods: {
        addComment(e) {
            this.addNewComment = true
            this.newComment.locationX = e.offsetX / e.target.clientWidth * 100
            this.newComment.locationY = e.offsetY / e.target.clientHeight * 100
            // this.newComment.imageID = this.image.id

            // this.$refs.newCommentForm.style.left = this.newComment.locationX + '%'
            // this.$refs.newCommentForm.style.top = this.newComment.locationY + '%'
           
            // Create a new element absolutely positioned at xPos, yPos
            

        },
        async createComment(e) {
            console.log(this.newComment)
        }
    }
}
</script>