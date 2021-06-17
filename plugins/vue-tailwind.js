/* import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import { TModal } from 'vue-tailwind/dist/components'

const settings = {
  't-modal': {
    component: TModal,
    props: {
      modal: '--modal',
      baseClass:
        'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed',
      overlayClass:
        'profile-modal z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-75',
      containerClass: 'z-50 relative p-3 mx-auto my-0 max-w-full',
      closeIconClass:
        'profile-modal-close fill-current h-6 w-6 absolute right-0 top-0 m-6',
      wrapperClass:
        'bg-white rounded shadow-lg border flex flex-col overflow-hidden',
      headerClass: 'px-6 py-3 text-xl border-b',
      bodyClass: 'p-6 flex-grow',
      footerClass: 'px-6 py-3 border-t',
    },
  },
}

Vue.use(VueTailwind, settings)
 */

import Vue from 'vue'
// import VueTailwind from 'vue-tailwind'
import TModal from 'vue-tailwind/src/components/TModal.vue'

Vue.use(TModal, {
  modal: '--profile-modal',
  baseClass:
    'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed',
  overlayClass:
    '--profile-modal-overlay z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-75',
  containerClass: 'z-50 relative p-3 mx-auto my-0 max-w-full',
  closeIconClass:
    '--profile-modal-close fill-current h-6 w-6 absolute right-0 top-0 m-6',
  wrapperClass:
    '--profile-modal-wrapper bg-white rounded shadow-lg border flex flex-col overflow-hidden',
  headerClass: 'px-6 py-3 text-xl border-b',
  bodyClass: 'p-6 flex-grow',
  footerClass: 'px-6 py-3 border-t',
})
