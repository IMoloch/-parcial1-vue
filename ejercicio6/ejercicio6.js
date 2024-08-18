const { ref, defineComponent, createApp } = Vue;

const Calculator = createApp({
  setup() {
    // Declaramos estado de referencia para los 2 números y el resultado
    const numero1 = ref()
    const numero2 = ref()
    const resultado = ref()

    // Funcion que calcula el resultado, con switch decidimos que operacion se realizará
    function calculate(operacion) {
      switch (operacion) {
        case 'Suma':
          resultado.value = +numero1.value + +numero2.value
          break;
        case 'Resta':
          resultado.value = +numero1.value - +numero2.value
          break;
        case 'Multiplicación':
          resultado.value = +numero1.value * +numero2.value
          break;
        case 'División':
          resultado.value = +numero1.value / +numero2.value
          break;

        default:
          break;
      }
      return resultado.value
    };

    return {
      numero1,
      numero2,
      resultado,
      calculate,
    };
  },
}).mount('#app')