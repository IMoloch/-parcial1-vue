const { ref, defineComponent, createApp, watch } = Vue;

//Creamos la variable donde definiremos el Componente
const InputWatch = defineComponent({
    template: `
    <div>
      <input v-model="watcherVariable" type="text" placeholder="Escribe algo..." />
      <p>{{ message }}</p>
    </div>
    `,
    setup() {
        const watcherVariable = ref('');
        const message = ref('');

        // Definimos al watcher que observa los cambios en la variable watcherVariable
        // este guarda el antiguo valor en oldValue y el nuevo en newValue
        // al activarse, muestra el mensaje
        watch(watcherVariable, (newValue, oldValue) => {
            message.value = `El valor ha cambiado de "${oldValue}" a "${newValue}"`;
        });

        return {
            watcherVariable,
            message,
        };
    }
});

//Se crea la app declarando el componente
const app = createApp({
    components: {
        'input-watcher': InputWatch,
    },
});

//montamos la aop con el id=app
app.mount('#app')