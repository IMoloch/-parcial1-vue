const { ref, defineComponent, createApp } = Vue;

//Creamos la variable donde definiremos el Componente
const ConditionalComponent = defineComponent({
    template: `
    <button @click="counting">{{ counter }}</button>
    <p>{{ message }}
    `,
    setup() {
        //declaracion de un estado reactivc para el contador, inicializada en 0
        const counter = ref(0)
        const message = ref("Pulsa el botón 10 veces")

        // Funcion que aumenta el valor 1 con cada click
        function counting() {
            counter.value++
            if(counter.value > 0) message.value = 'Vas por buen camino'
            if(counter.value >= 5) message.value = 'Ya casi llegas'
            if(counter.value >= 10) message.value = 'LLEGASTE!'
            if(counter.value >= 13) message.value = 'Ya puedes parar'
        }
        
        return {
            counter,
            message,
            counting,
        }
    }
});

//Se crea la app declarando el componente
const app = createApp({
    components: {
        'condicional-component': ConditionalComponent,
    },
});

//montamos la aop con el id=app
app.mount('#app')