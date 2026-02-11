import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "tailwindcss";
import { gsap } from "gsap";


gsap.registerPlugin(ScrollTrigger)
const app = createApp(App)

app.use(router)

app.mount('#app')
