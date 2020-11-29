import { createStore } from "vuex"
import { auth } from "./auth.module.js"

export const store = createStore({
    modules: {
        auth
        
    }
})