const { ref, defineComponent, createApp } = Vue;

//Creamos la variable donde definiremos el Componente
const InputButton = defineComponent({
  template: `
  <input v-model="inputMessage" placeholder="Pon tu mensaje..."> 
  <button @click="mostrarAlerta"> Submit </button> 
  `,
  setup() {
    // Declaramos estado de referencia vacio para el input
    const inputMessage = ref('')
    // Funcion que muestra la alerta
    function mostrarAlerta() {
      alert(`${inputMessage.value}`)
    }
    return {
      inputMessage,
      mostrarAlerta,
    };
  },
});

//Se crea la app declarando el componente
const app = createApp({
  components: {
    'input-button': InputButton,
  },
});

//montamos la aop con el id=app
app.mount('#app')