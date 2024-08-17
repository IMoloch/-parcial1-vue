const {createApp, ref} = Vue

createApp({
    setup() {
        //Declaramos los estados reactivos
        const message = ref('Ahora me ves')
        const status = ref(true) //estado que manejara si el mensaje debe mostrarse

        //funcion que invierte el valor de status
        function showOrHide() {
            status.value = !status.value
        }
        
        return {
            message,
            status,
            showOrHide
        }
    }
}).mount('#app')