import Vue from 'vue'


export const registerModule = (module: any) => {
    console.log("registerModule");
    module({ app: Vue })
}