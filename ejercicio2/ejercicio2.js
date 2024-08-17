const {createApp, ref} = Vue

createApp({
    setup() {
        //declaracion de un estado reactivc para el contador, inicializada en 0
        const count = ref(0)

        // Funcion que aumenta el valor 1 con cada click
        function counting () {
            count.value++
        }

        //Boton que resetea el valor del contador a 0
        function resetCount() {
            count.value = 0
        }
        
        return {
            count,
            counting,
            resetCount
        }
    }
}).mount('#app')