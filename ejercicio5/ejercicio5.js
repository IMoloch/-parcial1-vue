const { ref, createApp } = Vue;

const TaskList = createApp({
  setup() {
    // Decalramos la variable que contentra la lista y un estado de referencia
    // para almacenar el input de la nueva tarea a agregar
    const taskList = ref([
        'Sacar la basura',
        'Hacer la tarea',
        'Hacer la comida',
        'Arreglar el cuarto',
    ])
    const newTask = ref('')

    // Funcion para agregar una nueva tarea al final del array
    function addTask() {
      if (newTask.value.trim() !== ''){
        taskList.value.push(newTask.value.trim())
        newTask.value = ''
      }
    };

    // Funcion para eliminar la tarea con el indice seleccionado como argumento
    function removeTask(index) {
      taskList.value.splice(index, 1)
    };

    return {
      taskList,
      newTask,
      addTask,
      removeTask,
    };
  },
}).mount('#app')