import { createApp } from 'vue'
import App from '@/App'
import components from '@/components/UI'
import router from '@/router/router'
import store from "@/store";
import './axios'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .mount("#app")
