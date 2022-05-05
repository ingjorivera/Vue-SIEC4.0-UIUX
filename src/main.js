import { createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import { createPinia } from 'pinia'
import vSwitch from 'v-switch-case'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'

import Tooltip from 'primevue/tooltip';
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'

import './assets/custom.css'      
import 'primevue/resources/primevue.min.css'                
import 'primeicons/primeicons.css' 

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import './css/main.css'
import './css/toast.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



const app= createApp(App)
const pinia=createPinia()

pinia.use(piniaPluginPersistedstate)

library.add(fas, far, fab)

app.use(PrimeVue,{zIndex: {
    modal: 1900,        //dialog, sidebar
    overlay: 9999,      //dropdown, overlaypanel
    menu: 1000,         //overlay menus      
}})
app.use(ToastService)
app.use(pinia)
app.use(router)
app.use(vSwitch)
app.directive('tooltip',Tooltip)

app.component('Dialog',Dialog)
app.component('InputText',InputText)
app.component('Button',Button)
app.component('Toast',Toast)
app.component('font-awesome-icon',FontAwesomeIcon)

//Variables globales ejemplo toast




app.mount('#app')
