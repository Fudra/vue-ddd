import { inject, h, ComponentOptionsMixin} from "vue";
import { Emitter } from "mitt";
import { EmitterKey } from "@/plugins/modules";
import { useMessagingStore } from "./store";

export default {
    setup() {        
        const emitter = inject<Emitter<any>>(EmitterKey);
        const messagingStore = useMessagingStore();

        emitter?.on("*", (type, e) => messagingStore.log(type, e));

        // dummy element
        return () => h("div")
    }
} as ComponentOptionsMixin