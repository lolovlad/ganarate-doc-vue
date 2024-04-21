import {createStore} from "vuex";
import {auth} from "@/store/auth.model";


export default createStore({
    modules: {
        auth,
    }
})
