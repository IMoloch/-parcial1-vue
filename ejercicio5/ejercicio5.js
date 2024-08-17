const { ref, defineComponent, createApp } = Vue;

const TaskList = createApp({
  setup() {
    // Declaramos estado de referencia vacio para el input
    const taskList = ref([
        'Sacar la basura',
        'Hacer la tarea',
        'Hacer la comida',
        'Arreglar el cuarto',
    ])
    // Funcion que muestra la alerta
    function addTask() {
        taskList.push()
    }
    return {
      taskList,
    };
  },
}).mount('#app');