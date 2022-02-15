import { inject, h, ComponentOptionsMixin } from "vue";
import { Emitter } from "mitt";
import { EmitterKey } from "@/plugins/modules";


export default {
    setup() {
        const emitter = inject<Emitter<any>>(EmitterKey);
        
        setInterval(() => {
            emitter?.emit("time:interval"),
            console.log("time:interval called");
        }, 5000)

        // dummy element
        return () => h("div")
    } 
} as ComponentOptionsMixin