export { default as BookingFooter } from '../../components/BookingFooter.vue'
export { default as BookingHeader } from '../../components/BookingHeader.vue'
export { default as ContactForm } from '../../components/ContactForm.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as GalleryImage } from '../../components/GalleryImage.vue'
export { default as HeaderDisabled } from '../../components/Header-disabled.vue'
export { default as Icon } from '../../components/Icon.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Project } from '../../components/Project.vue'
export { default as ServiceCard } from '../../components/ServiceCard.vue'
export { default as ServiceGallery } from '../../components/ServiceGallery.vue'
export { default as SettingsNavigation } from '../../components/SettingsNavigation.vue'
export { default as SovernLogo } from '../../components/SovernLogo.vue'
export { default as Waitlist } from '../../components/Waitlist.vue'
export { default as CardAutomation } from '../../components/Card/Automation.vue'
export { default as InputAutomationAction } from '../../components/Input/AutomationAction.vue'
export { default as InputClient } from '../../components/Input/Client.vue'
export { default as InputDateTime } from '../../components/Input/DateTime.vue'
export { default as InputImageUploader } from '../../components/Input/ImageUploader.vue'
export { default as InputLocation } from '../../components/Input/Location.vue'
export { default as InputMoodboard } from '../../components/Input/Moodboard.vue'
export { default as InputPrice } from '../../components/Input/Price.vue'
export { default as InputTaskCondition } from '../../components/Input/TaskCondition.vue'
export { default as InputWorkflow } from '../../components/Input/Workflow.vue'
export { default as ModalCreateAutomation } from '../../components/Modal/CreateAutomation.vue'
export { default as ModalCreateClient } from '../../components/Modal/CreateClient.vue'
export { default as ModalCreateMoodboard } from '../../components/Modal/CreateMoodboard.vue'
export { default as ModalCreateProject } from '../../components/Modal/CreateProject.vue'
export { default as ModalCreateService } from '../../components/Modal/CreateService.vue'
export { default as ModalCreateWorkflow } from '../../components/Modal/CreateWorkflow.vue'
export { default as ModalMoodboardLightbox } from '../../components/Modal/MoodboardLightbox.vue'
export { default as ModalViewProject } from '../../components/Modal/ViewProject.vue'
export { default as InputUtilsDatePicker } from '../../components/Input/Utils/DatePicker.vue'
export { default as InputUtilsDatePickerDisabled } from '../../components/Input/Utils/DatePickerDisabled.vue'
export { default as InputUtilsDateTimeScheduler } from '../../components/Input/Utils/DateTimeScheduler.vue'
export { default as InputUtilsDropdown } from '../../components/Input/Utils/Dropdown.vue'
export { default as InputUtilsPhone } from '../../components/Input/Utils/Phone.vue'
export { default as InputUtilsTextarea } from '../../components/Input/Utils/Textarea.vue'
export { default as InputUtilsToggle } from '../../components/Input/Utils/Toggle.vue'

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
