export { default as BookingFooter } from '../../components/BookingFooter.vue'
export { default as BookingHeader } from '../../components/BookingHeader.vue'
export { default as ContactForm } from '../../components/ContactForm.vue'
export { default as DatePicker } from '../../components/DatePicker.vue'
export { default as DateScheduler } from '../../components/DateScheduler.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as GalleryImage } from '../../components/GalleryImage.vue'
export { default as HeaderDisabled } from '../../components/Header-disabled.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Project } from '../../components/Project.vue'
export { default as ServiceCard } from '../../components/ServiceCard.vue'
export { default as ServiceGallery } from '../../components/ServiceGallery.vue'
export { default as SovernLogo } from '../../components/SovernLogo.vue'
export { default as Waitlist } from '../../components/Waitlist.vue'
export { default as ModalCreateProject } from '../../components/Modal/CreateProject.vue'
export { default as InputClient } from '../../components/Input/Client.vue'
export { default as InputLocation } from '../../components/Input/Location.vue'
export { default as InputMoodboard } from '../../components/Input/Moodboard.vue'
export { default as InputPrice } from '../../components/Input/Price.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
