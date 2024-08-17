const {createApp, ref} = Vue

createApp({
    setup() {
        // utilizamos ref para declarar un estado reactivo
        const title = ref('Ejercicio 1') 
        const message = ref('Bienvenido al primer ejercicio del parcial')

        return {
            title,
            message,
        }
    }
}).mount('#app')