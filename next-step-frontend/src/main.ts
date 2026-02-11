import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gsap } from "gsap";
import "./styles.css"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const app = createApp(App)

app.use(router).mount('#app')

document.addEventListener("DOMContentLoaded", () => {
  console.log(`
                               /$$                 /$$                         /$$     /$$              
                              | $$                | $$                        | $$    |__/              
 /$$$$$$/$$$$   /$$$$$$   /$$$$$$$  /$$$$$$       | $$$$$$$  /$$   /$$       /$$$$$$   /$$ /$$$$$$/$$$$ 
| $$_  $$_  $$ |____  $$ /$$__  $$ /$$__  $$      | $$__  $$| $$  | $$      |_  $$_/  | $$| $$_  $$_  $$
| $$ \\ $$ \\ $$  /$$$$$$$| $$  | $$| $$$$$$$$      | $$  \\ $$| $$  | $$        | $$    | $$| $$ \\ $$ \\ $$
| $$ | $$ | $$ /$$__  $$| $$  | $$| $$_____/      | $$  | $$| $$  | $$        | $$ /$$| $$| $$ | $$ | $$
| $$ | $$ | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$      | $$$$$$$/|  $$$$$$$        |  $$$$/| $$| $$ | $$ | $$
|__/ |__/ |__/ \\_______/ \\_______/ \\_______/      |_______/  \\____  $$         \\___/  |__/|__/ |__/ |__/
                                                             /$$  | $$                                  
                                                            |  $$$$$$/                                  
                                                             \\______/                                   
    `)
})
