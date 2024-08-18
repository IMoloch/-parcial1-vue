const { ref, defineComponent, createApp, computed } = Vue;

//Creamos la variable donde definiremos el Componente
const ComputedProperties = defineComponent({
    template: `
    <div>
      <input v-model="firstName" type="text" placeholder="Nombre" />
      <input v-model="lastName" type="text" placeholder="Apellido" />
      <p>Nombre Completo: {{ fullName }}</p>
    </div>
    `,
    setup() {
        const firstName = ref('')
        const lastName = ref('')
        
        // Declaramos la propiedad computada, retornamos un string nuevo uniendo los
        // 2 nombres, y utilizando trim() para quitar los espacios al inicio y final
        const fullName = computed(() => {
            return `${firstName.value} ${lastName.value}`.trim();
        });
        
        return {
            firstName,
            lastName,
            fullName,
          };
    }
});

//Se crea la app declarando el componente
const app = createApp({
    components: {
        'computed-properties': ComputedProperties,
    },
});

//montamos la aop con el id=app
app.mount('#app')