<template>
  <component
    :is="iconComponent"
    role="img"
    class="inline-block stroke-current"
  />
</template>

<script>
// const icons = { 
//   eye: require('./icons/Eye.vue'),
// }

export default {
  props: {
    name: {
      type: String,
      required: true,
      // validator(value) {
      //   return Object.prototype.hasOwnProperty.call(icons, value)
      // }
    }
  },
  computed: {
    iconComponent() {
      return 'Icons' + this.name
    }
  }
}
</script>